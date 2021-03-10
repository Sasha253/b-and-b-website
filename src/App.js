import React from 'react';
import {Map , GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import {footerTheme, headerTheme} from './components/theme';
import Homepage from './pages/home';
import ContactPage from './pages/contact';
import HotelBookingsPage from './pages/hotel-bookings';
import SalesLongTermRentalsPage from './pages/sales-long-term-rentals';
import ShortTermRentalsPage from './pages/short-term-rentals';
import AboutPage from './pages/about';
import ActivitiesPage from './pages/activities';
import GalleryPage from './pages/gallery';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import {
  AppBar, 
  Button, 
  Grid, 
  Toolbar,
  Typography, 
  Fade, 
  MenuItem, 
  Menu, 
  makeStyles, 
  ClickAwayListener, 
  Paper,

} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Theaters } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  headerDetails: {
    flexGrow: 1,
  },

  mainTitle: {
    flexGrow: 1,
  },

  root: {
    background: "#000000",
    color: "#FFFFFF"
  }

}));

const mapStyles = {
  width: '100',
  height: '100'
};

function AccommodationDropdown(props) {

  return (
    <div>
      <Menu
        id="dropdown-menu"
        anchor = {true}
        keepMounted
        open = {true}
        TransitionComponent = {Fade}
      >
        <MenuItem> 
          <Button>
            HOTEL BOOKINGS
          </Button>   
        </MenuItem>
        <MenuItem> 
          <Button>
            SHORT TERM RENTALS
          </Button>
        </MenuItem>
        <MenuItem> 
          <Button>
            SALES & LONG TERM RENTALS
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

function ContactDropdown() {

  return (
    <div>
      <Menu
        id="dropdown-menu"
        anchor = {true}
        keepMounted
        open = {true}
        TransitionComponent = {Fade}
      >
        <MenuItem> 
          <Button href = "/contact-us">
            CONTACT US 
          </Button>
        </MenuItem>
        <MenuItem> 
          <Button href = "/privacy-policy">
            PRIVACY POLICY
          </Button> 
        </MenuItem>
        <MenuItem> 
          <Button href = "/refund-policy ">
            REFUND POLICY
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

function MapContainer(props) {

  const state = {
    showingInfoWindow: false,
    activeMarker: {},       
    selectedPlace: {}       
  };

  const onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  const onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -26.2884,
            lng: 28.8233
          }
        }
      > 
      <Marker
          onClick={this.onMarkerClick}
          name={'The Ogle Point'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }

function App() {
  const [openAccom, setOpenAccom] = React.useState(false);

  const accomodationOnClick = () => {
    setOpenAccom((prev) => !prev);
  }
  const accomodationClickAway = () => {
    setOpenAccom(false);
  };

  const [openContact, setOpenContact] = React.useState(false);

  const contactOnClick = () => {
    setOpenContact((prev) => !prev);
  }
  const contactClickAway = () => {
    setOpenContact(false);
  };

  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme = {headerTheme}>
        <AppBar color = "secondary" position = "static">
          <Toolbar> 
            <Typography className = {classes.headerDetails} variant = "h10">
              CALL: Number | emailaddress.co.za
            </Typography>
            <Button variant = "contained" color = "secondary" href = "/bookings">
                BOOK NOW
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
          <AppBar color = "primary" position = "sticky">
            <Toolbar> 
              <Typography className = {classes.mainTitle} variant = "h4">
                The Ogle Point
              </Typography>
                <Button href = "/">
                  HOME
                </Button>
                <Button href = "/about-us">
                  ABOUT
                </Button>
                <ClickAwayListener onClickAway = {accomodationClickAway}>
                  <Button onClick = {accomodationOnClick} >
                    {openAccom ? (
                      <AccommodationDropdown />
                    ) : null}
                    ACCOMODATION
                  </Button>
                </ClickAwayListener>
                <Button href = "/gallery">
                  GALLERY
                </Button>
                <Button href = "/activities">
                  ACTIVITIES
                </Button>
                <ClickAwayListener onClickAway = {contactClickAway}>
                  <Button onClick = {contactOnClick} >
                    {openContact? (
                      <ContactDropdown />
                    ) : null}
                    CONTACT
                  </Button>
                </ClickAwayListener>
            </Toolbar>
          </AppBar>

        <Router>
          <Switch>
            <Route 
              exact path = "/" component = {Homepage} />
            <Route 
              path = "/hotel-bookings" component = {HotelBookingsPage} />
              <Route 
              path = "/short-term-rentals" component = {ShortTermRentalsPage} />
              <Route 
              path = "/sales-long-term-rentals" component = {SalesLongTermRentalsPage} />
            <Route 
              path = "/contact-us" component = {ContactPage} />
            <Route 
              path = "/activities" component = {ActivitiesPage} />
            <Route 
              path = "/gallery" component = {GalleryPage} />
            <Route 
              path = "/about-us" component = {AboutPage} />    
          </Switch>
        </Router>


        <ThemeProvider theme = {footerTheme}>  
          <Paper>              
            <Grid className = {classes.root} align = "center" container spacing = {3}>
              <Grid item xs = {4}>
                  <Typography variant = "subtitle2" color = "textSecondary"> 
                    FIND US
                  </Typography>
                    {/*<MapContainer />*/}
              </Grid>
              <Grid item xs = {4}>
                <Typography variant = "subtitle2">
                  CONTACT DETAILS
                </Typography>
                <Typography align = "left" variant = "body1">

                  The Ogle Point

                  Address

                  Concierge Office: 000-000-000
                  Concierge Cell: 000-000-000

                  General: info@theoglepoint.co.za
                  Hotel Reservations: bookings@theoglepoint.co.za
                  Sales and Rentals: name@theoglepoint.co.za

                </Typography>
                
              </Grid>
              <Grid item xs = {4}>
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiBUX1pC4a7UfoYpjieOdyEgxR4TjjvJKtg&usqp=CAU"
                      alt = "logo" />
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: pass
})(App);

