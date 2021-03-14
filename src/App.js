import React from 'react';
import MapContainer from './components/map-container';
import Homepage from './pages/home';
import ContactPage from './pages/contact';
import AccomodationPage from './pages/accomodation';
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
  ClickAwayListener, 
  Paper,
  ButtonGroup,
  Box,
  Link,
} from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
  }, 

  header: {
    flexGrow: 1,
  },

  text: {
    padding: "20px",
  },

  mainTitle: {
    flexGrow: 1,
  },
  
  container: {
    padding: "20px 20px 20px 20px",
    color: "#FFFFFF"
  },

  map: {
    position: "relative",
  }, 
  appbar : {
    position: "sticky",
  },

  

}));

const HeaderTypography = withStyles({
  root: {
    color: "#757575"
  }
})(Typography);

function App() {

  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#757575" //grey
        },
        secondary: {
          main: "#382f24" //darker grey
        },
        text: {
          primary: "#000000",
          secondary: "#FFFFFF",
        },
        footerBackground: {
          main: "#000000"
        },
    }
  });

  const social_media_theme = createMuiTheme({
    palette: {
        text: {
          primary: "#FFFFFF",
        },
    }
  });

  return (
    <div /* className = {classes.root} */>
      <ThemeProvider theme = {theme}>
        <AppBar color = "secondary" position = "relative">
          <Toolbar> 
            <Typography className = {classes.header} variant = "h10">
              CALL: Number | emailaddress.co.za
            </Typography>
            <Button variant = "contained" color = "secondary" href = "/bookings">
                BOOK NOW
            </Button>
          </Toolbar>
        </AppBar>
          <AppBar className = {classes.appbar} color = "text.seconsdary" >
            <Toolbar > 
              <Typography className = {classes.mainTitle} variant = "h4">
                The Ogle Point
              </Typography>
                <ButtonGroup variant = "contained">
                  <Button href = "/">
                    HOME
                  </Button>
                  <Button href = "/about-us">
                    ABOUT
                  </Button>
                  <Button href = "/accomodation">
                    ACCOMODATION
                  </Button>
                  <Button href = "/gallery">
                    GALLERY
                  </Button>
                  <Button href = "/activities">
                    ACTIVITIES
                  </Button>
                  <Button href = "/contact-us">
                    CONTACT
                  </Button>
                </ButtonGroup>
            </Toolbar>
          </AppBar>

          <Router>
            <Switch>
              <Route 
                exact path = "/" component = {Homepage} />
              <Route 
                path = "/accomodation" component = {AccomodationPage} />
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

        <Box height = "10px" bgcolor = "primary.main" />
        <Box bgcolor = "footerBackground.main">            
          <Grid align = "center" container spacing = {15}>
            <Grid className = {classes.container} item xs = {4}>
                <HeaderTypography variant = "subtitle2" paragraph> 
                  FIND US
                </HeaderTypography>
                  <Grid className = {classes.map}>
                    <MapContainer />
                  </Grid>

            </Grid>
            <Grid className = {classes.container} item xs = {4}>
              <HeaderTypography variant = "subtitle2" paragraph>
                CONTACT DETAILS
              </HeaderTypography>
              <Typography align = "left" variant = "body1">

                The Ogle Point
                <br />
                Address
                <br />
                Concierge Office: 000-000-000
                <br />
                Concierge Cell: 000-000-000
                <br />
                General: info@theoglepoint.co.za
                <br />
                Hotel Reservations: bookings@theoglepoint.co.za
                <br />
                Sales and Rentals: name@theoglepoint.co.za

              </Typography>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
            </Grid>
            <Grid className = {classes.container} item xs = {4}>
              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiBUX1pC4a7UfoYpjieOdyEgxR4TjjvJKtg&usqp=CAU"
                    alt = "logo" />
            </Grid>
          </Grid>
        </Box>

        <Box align = "center" className = {classes.text} bgcolor = "secondary.main">
          <Typography style = {{fontSize: 10}} paragraph color = "text.secondary">
          Muzinox Pty Ltd T/A One Hyde Park | Copyright 2020 | All Rights Reserved | Site by 
          
          <Link style = {{marginLeft: "5px", color: "rgba(255, 255, 255, 0.7)"}}  href = "https://onehydepark.co.za/accommodation/hotel-bookings/"> 
            Sasha Muller 
          </Link>
          <br />
          This website is hosted, controlled and operated from the Republic of South Africa and 
            therefore governed by South African law and subject to 
          <br />
          the clause 18 of the Terms & Conditions you and One Hyde Park submit to the jurisdiction 
          of the South African courts.
          </Typography>

          <ThemeProvider theme = {social_media_theme} >
            <Button>
              <FacebookIcon />
            </Button>
            <Button>
              <InstagramIcon/>
            </Button>
            <Button>
              <EmailIcon />
            </Button>
          </ThemeProvider>
          
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;

