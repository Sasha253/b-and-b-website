import React from 'react';
import 'date-fns';
import clsx from 'clsx';
import { 
    Grid, 
    Typography,
    Button,
    Accordion,
    AccordionSummary, 
    AccordionActions, 
    AccordionDetails, 
    Paper, 
    Box,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import PersonIcon from '@material-ui/icons/Person';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
    titleMain: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        marginBottom: '40px',
    },

    titleImage: {
        filter: "brightness(50%)",
    },

    main: {
        margin: theme.spacing(3),
    },

    titleText: {
        position: 'absolute',
        top: '45%',
        left: '45%',
    },      

    title: {
        marginTop: theme.spacing(3), 
        marginBottom: theme.spacing(1.2), 
    }
}))

/* function DatePicker() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  } */



function Room(props) {
    const useStyles = makeStyles((theme) => ({
        room: {
            marginBottom: theme.spacing(3),
        },

        anchor: {
            paddingTop: "60px", 
            marginTop: "-60px", 
        },

    }));
    const classes = useStyles();
    const room_name = props.content;

    return (
        <Grid>
            <Grid className = {classes.room}>
                {(() => {
                  switch (room_name) {
                    case "Premium Room": return (
                    <Grid className = {classes.anchor} id = 'premium-room' container spacing = {3}>
                        <Grid item xs = {6}>
                            <img height = "300" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                alt = "room" />
                        </Grid>
                        <Grid item xs = {6}>
                                <Typography variant = "h5" paragraph style = {{color: "#000000"}}>
                                    Premium Room
                                </Typography>
                                <Typography paragraph variant = "body2" color = "primary">
                                    This stylish bedroom is spacious and sleeps 2, it has an incredible view of the Dam - equiped with a double bed, en suite bathroom with a shower, air conditioning, hair dryer and iron
                                    guests can relax in the comfort of the room and stay connected with Free High-speed WiFi.										
                                </Typography> 
                                <RoomAccordion content = "Premium Room" /> 
                        </Grid>
                    </Grid>
                    )
                    case "Family Room": return (
                        <Grid className = {classes.anchor} id = 'family-room' container spacing = {3}> 
                            <Grid item xs = {6}>
                                <img height = "300" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                    alt = "room" />
                            </Grid>
                            <Grid item xs = {6}>
                            <Typography variant = "h5" paragraph style = {{color: "#000000"}}> 
                                Family Room
                            </Typography>
                            <Typography paragraph variant = "body2">
                                The Family room is easily adapted to suit a variety of accommodation needs.									
                                Equipped with 2 single beds which can also be transformed into a double Bed creating the perfect setup for a family on holiday									
                                    it includes a beautiful view of the Dam, air conditioning, Free high speed Wifi, a hairdryer and an iron 									
                                Breakfast Included		Braai Coal supplied	Non Smoking	Tennis Courts and Communal swimming pool		Free parking on premises												
                            </Typography>  
                            <RoomAccordion content = "Family Room" />
                            </Grid>
                        </Grid>
                    )
                    case "Deluxe Room": return (
                            <Grid className = {classes.anchor} id = 'deluxe-room' container spacing = {3}> 
                                <Grid item xs = {6}>
                                    <img height = "300" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                        alt = "room" />
                                </Grid>
                                <Grid item xs = {6}>
                                <Typography variant = "h5" paragraph style = {{color: "#000000"}}>
                                    Deluxe Room
                                </Typography>
                                <Typography paragraph variant = "body2">
                                    For a pleasant hartbeespoort stay, the Deluxe room has a fantastic view of the Dam and is kitted with everything you will need to make The Ogle Point your home away from home 									
                                    The room offers the perfect space for 2 people sharing, equipped with a comfortable double bed and an en suite bathroom with a shower									
                                    Airconditioning, free Wifi, Iron, and a hairdryer 									
                                        Breakfast Included		Braai Coal supplied	Non Smoking	Tennis Courts and Communal swimming pool		Free parking on premises												
                                </Typography>  
                                <RoomAccordion content = "Deluxe Room" />
                                </Grid>
                            </Grid>
                    )
                    case "Standard Room": return (
                        <Grid className = {classes.anchor} id = 'standard-room' container spacing = {3}> 
                            <Grid item xs = {6}>
                                <img height = "300" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                 alt = "room" />
                             </Grid>
                            <Grid item xs = {6}>
                                <Typography variant = "h5" paragraph style = {{color: "#000000"}}>
                                    Standard Room
                                </Typography>
                                <Typography paragraph variant = "body2">
                                    The standard room offers style and comfort from the moment you arrive 								
                                    Equiped with a double bed, air conditioning, Free Wifi, hair dryer and an iron.								
                                    <br />	
                                    Breakfast Included		Braai Coal supplied	Non Smoking	Tennis Courts and Communal swimming pool		Free parking on premises
                                    <br />											
                                </Typography> 

                                <RoomAccordion content = "Standard Room" /> 
                                </Grid>
                        </Grid>
                    )
                    case "Full house with Host": return (
                            <Grid className = {classes.anchor} id = 'full-house-host' container spacing = {3}>  
                                <Grid item xs = {6}>
                                    <img height = "300" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                        alt = "room" />
                                </Grid>
                                <Grid item xs = {6} >
                                <Typography variant = "h5" paragraph style = {{color: "#000000"}}>
                                    Full House With A Host
                                </Typography>
                                <Typography paragraph variant = "body2">
                                    The perfect getaway  in a popular and exclusive waterfront complex									
                                    The lounge area leads through sliding doors to a large patio with garden, built in braai with lovely views. 									
                                    Incluides access to the foreshore, Tennis courts and communal swimming pools									
									
                                    4 Bedrooms 		Dining Room							
                                    3 En suite Bathrooms 		Family/TV Room							
                                    Kitchen		Braai							
                                    Lounge		Patio, Air Conditioner							
                                    Free WIFI		Free parking on premises																
                                </Typography>  
                                <RoomAccordion content = "Full house with Host" />
                                </Grid>
                            </Grid>
                    )
                }
                })()}
            <RoomAccordion content = {room_name.room1} />
            </Grid>
        </Grid>
    );
}

function RoomAccordion(props) {

    const room_name = props.content;

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        secondaryHeading: {
          fontSize: theme.typography.pxToRem(15),
          color: theme.palette.text.secondary,
        },
        icon: {
          verticalAlign: 'bottom',
          height: 20,
          width: 20,
        },
        helper: {
          borderLeft: `2px solid ${theme.palette.divider}`,
          padding: theme.spacing(1, 2),
        },
        link: {
          color: theme.palette.primary.main,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      }));

    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        {(() => {
            switch (room_name) {
                case "Premium Room": return (
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <PersonIcon />
                        <Typography variant = "subtitle1"> 1 person - available rates </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box marginLeft = {2}>
                        <Typography variant = "body2">
                            JAN - MAR:  R1,595
                            <br />
                            APR - JUNE:  R1,495  
                            <br />
                            JULY - SEP:  R1,695
                            <br />
                            OCT - DEC:  R1,795
                        </Typography>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            )

            case "Family Room": return (   
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <PersonIcon />
                            <Typography variant = "subtitle1"> 1 person - available rates </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant = "body2">
                                JAN - MAR:  R1,495
                                <br />
                                APR - JUNE:  R1,495
                                <br />
                                JULY - SEP:  R1,595
                                <br />
                                OCT - DEC:  R1,695
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
            )
            case "Deluxe Room": return (   
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <PersonIcon />
                        <Typography variant = "subtitle1"> 1 person - available rates </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant = "body2">
                            JAN - MAR:  R1,645
                            <br />
                            APR - JUNE:  R1,545
                            <br />
                            JULY - SEP:  R1,745
                            <br />
                            OCT - DEC:  R1,845
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
            case "Standard Room": return (   
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <PersonIcon />
                        <Typography variant = "subtitle1"> 1 person - available rates </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant = "body2">
                            JAN - MAR:  R1,345
                            <br />
                            APR - JUNE:  R1,395
                            <br />
                            JULY - SEP:  R1,495
                            <br />
                            OCT - DEC:  R1,495
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
            case "Full house with Host": return (   
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <PersonIcon />
                        <Typography variant = "subtitle1"> 1 person - available rates </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant = "body2">
                            JAN - MAR:  R6,000 
                            <br />
                            APR - JUNE:  R5,850
                            <br />
                            JULY - SEP:  R6,450
                            <br />
                            OCT - DEC:  R6,750
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        }
    })()}
      </div>
    );
  }

function AccomodationPage() {
    const classes = useStyles();

    const room_name = {
        room1: "Premium Room", 
        room2: "Family Room", 
        room3: "Deluxe Room", 
        room4: "Standard Room",
        room5: "Full house with Host", 
    };

    return (
        <Grid>
            <Grid className = {classes.titleMain}>
                <Grid className = {classes.titleImage}>
                    <img height = "400" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                        alt = "the outdoors" />
                </Grid>
                <Grid className = {classes.titleText}>
                    <Typography  variant = "h4">
                        BOOKINGS
                    </Typography>
                </Grid>
            </Grid>
            <Grid className = {classes.main} >
                <Grid className = {classes.title}> 
                    <Typography variant = "h5" color = "primary">
                        MAKE YOUR CHOICE
                    </Typography>
                </Grid>

                <Room content = {room_name.room1} />
                <Room content = {room_name.room2} />
                <Room content = {room_name.room3} />
                <Room content = {room_name.room4} />
                <Room content = {room_name.room5} />
            </Grid>
        </Grid>
    );
}

export default AccomodationPage;