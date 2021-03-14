import React from 'react';
//import mainTheme from './theme';
import 'clsx';
import {createMuiTheme, withStyles, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {
  Button,  
  Grid, 
  Typography,
  SvgIcon,
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea, 
  Divider,
  Link,
} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    titleMain: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },

    titleImage: {
        filter: "brightness(60%)",
        marginBottom: "20px",
    },

    titleText: {
        position: 'absolute',
        top: '50%',
        left: '40%',
    },

    media: {
        height: 200, 
    },

    leftCard: {
        height: 350,
        width: 450,
        marginLeft: "90px", 
        margin: "20px",
    },
    rightCard: {
        height: 350,
        width: 450,
        marginRight: "90px",
        margin: "20px", 
    },
}))

function ActivitiesPage() {
    const classes = useStyles();

    const buttonTheme = createMuiTheme({
        palette: {
          primary: {
              main: blue[500],
          },
        },
      });

    return(
        <Grid>
            <Grid className = {classes.titleMain}>
                <Grid className = {classes.titleImage}>
                    <img height = "400" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                        alt = "the outdoors" />
                </Grid>
                <Grid className = {classes.titleText}>
                    <Typography  variant = "h4">
                        ACTIVITES
                    </Typography>
                    <Typography variant = "body2">
                        Please note that all activities are off site
                    </Typography>
                </Grid>
            </Grid>
            <Grid align = "center" container justify = "space-evenly">
                <Grid item xs>
                    <Card className = {classes.leftCard}>
                        <CardActionArea>
                            <CardMedia 
                                className = {classes.media}
                                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                title = "activity"
                            />
                            <CardContent>
                                <Typography color = "textPrimary" variant = "h5" gutterBottom>
                                    MONKEY SANCTUARY
                                </Typography>
                                <Typography variant = "body2">
                                    DISTANCE: 8.4km / 13 min drive
                                </Typography>
                                <Typography variant = "body2" gutterBottom>
                                    FOOD & ENT: MRS BURGERS
                                </Typography>
                                <ThemeProvider theme = {buttonTheme}>
                                    <Button href = "https://www.monkeysanctuary.co.za/" variant = "contained" color = "primary">
                                        VIEW MORE 
                                        <ArrowForwardIosIcon style = {{fontSize: 15}}/>
                                    </Button>
                                </ThemeProvider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className = {classes.rightCard}>
                        <CardActionArea>
                            <CardMedia 
                                className = {classes.media}
                                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                title = "activity"
                            />
                            <CardContent>
                                <Typography variant = "h5" gutterBottom>
                                    LION & SAFARI PARK
                                </Typography>
                                <Typography variant = "body2">
                                    DISTANCE: 25.7km / 30 min drive
                                </Typography>
                                <Typography variant = "body2" gutterBottom>
                                    FOOD & ENT: WIMPY
                                </Typography>
                                <ThemeProvider theme = {buttonTheme}>
                                    <Button href = "https://lionandsafaripark.com/" variant = "contained" color = "primary">
                                        VIEW MORE 
                                        <ArrowForwardIosIcon style = {{fontSize: 15}}/>
                                    </Button>
                                </ThemeProvider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className = {classes.leftCard}>
                        <CardActionArea>
                            <CardMedia 
                                className = {classes.media}
                                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                title = "activity"
                            />
                            <CardContent>
                                <Typography variant = "h5" gutterBottom>
                                    CRADLE OF HUMANKIND
                                </Typography>
                                <Typography variant = "body2">
                                    DISTANCE: 17.3km / 21 min drive
                                </Typography>
                                <Typography variant = "body2" gutterBottom>
                                FOOD & ENT: LA TERAZZA
                                </Typography>
                                <ThemeProvider theme = {buttonTheme}>
                                    <Button href = "https://www.myguidejohannesburg.com/regionalinfo/cradle-of-humankind-and-hartbeespoort-dam" variant = "contained" color = "primary">
                                        VIEW MORE 
                                        <ArrowForwardIosIcon style = {{fontSize: 15}}/>
                                    </Button>
                                </ThemeProvider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className = {classes.rightCard}>
                        <CardActionArea>
                            <CardMedia 
                                className = {classes.media}
                                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU"
                                title = "activity"
                            />
                            <CardContent>
                                <Typography variant = "h5" gutterBottom>
                                        MOBILE ADVENTURES
                                </Typography>
                                <Typography variant = "body2">
                                    DISTANCE: 21.4km / 21 min drive
                                </Typography>
                                <Typography variant = "body2" gutterBottom>
                                    FOOD & ENT: RIVERSIDE PUB
                                </Typography>
                                <ThemeProvider theme = {buttonTheme}>
                                    <Button href = "https://www.mobileadventures.co.za/" variant = "contained" color = "primary">
                                        VIEW MORE 
                                        <ArrowForwardIosIcon style = {{fontSize: 15}}/>
                                    </Button>
                                </ThemeProvider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ActivitiesPage;