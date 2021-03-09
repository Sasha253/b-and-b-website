import React from 'react';
//import mainTheme from './theme';
import {makeStyles} from '@material-ui/core/styles';
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
  //ThemeProvider,
} from '@material-ui/core';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
    titleImage: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },

    titleImageText: {
        position: 'absolute',
        top: '50%',
        left: '40%',
    },

    media: {
        height: 200, 
    },
    card: {
        height: 350,
        maxWidth: 300,
    },
    cardPadding: {
        height: 350,
        width: 300,
        marginLeft: theme.spacing(10),
    },
}))

function ActivitiesPage() {
    const classes = useStyles();

    return(
        <Grid>
            <Grid className = {classes.titleImage}>
                <img height = "400" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                        alt = "the outdoors" />
                <Grid className = {classes.titleImageText}>
                    <Typography  variant = "h4">
                        ACTIVITES
                    </Typography>
                    <Typography variant = "body2">
                        Please note that all activities are off site
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing = {2}>
                <Grid item xs = {3}>
                    <Card className = {classes.cardPadding}>
                        <CardActionArea>
                            <CardMedia 
                                className = {classes.media}
                                image = "./bbimage.jpg"
                                title = "activity"
                            />
                            <CardContent>
                                <Typography variant = "h5">
                                    MONKEY & SANCTUARY
                                </Typography>
                                <Typography variant = "body1">
                                    DISTANCE: 8.4km / 13 min drive
                                </Typography>
                                <Typography variant = "body1">
                                    FOOD & ENT: MRS BURGERS
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs = {3}>
                    <Card className = {classes.card}>
                        <CardActionArea>
                            <CardMedia 
                                className = {classes.media}
                                image = "./bbimage.jpg"
                                title = "activity"
                            />
                            <CardContent>
                                <Typography variant = "h5">
                                    LION & SAFARI PARK
                                </Typography>
                                <Typography variant = "body1">
                                    DISTANCE: 25.7km / 30 min drive
                                </Typography>
                                <Typography variant = "body1">
                                    FOOD & ENT: WIMPY
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs = {3}>
                    <Card className = {classes.card}>
                        <CardActionArea>
                            <CardMedia 
                                className = {classes.media}
                                image = "./bbimage.jpg"
                                title = "activity"
                            />
                            <CardContent>
                                <Typography variant = "h5">
                                    CRADLE OF HUMANKIND
                                </Typography>
                                <Typography variant = "body1">
                                    DISTANCE: 17.3km / 21 min drive
                                </Typography>
                                <Typography variant = "body1">
                                FOOD & ENT: LA TERAZZA
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs = {3}>
                    <Card className = {classes.card}>
                        <CardActionArea>
                            <CardMedia 
                                className = {classes.media}
                                image = "./bbimage.jpg"
                                title = "activity"
                            />
                            <CardContent>
                                <Typography variant = "h5">
                                        MOBILE ADVENTURES
                                </Typography>
                                <Typography variant = "body1">
                                    DISTANCE: 21.4km / 21 min drive
                                </Typography>
                                <Typography variant = "body1">
                                    FOOD & ENT: RIVERSIDE PUB
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ActivitiesPage;