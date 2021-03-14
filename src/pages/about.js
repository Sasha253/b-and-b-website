import React from 'react';
import { 
    Grid, 
    makeStyles, 
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme => ({
    titleMain: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },

    titleText: {
        position: 'absolute',
        top: '50%',
        left: '40%',
    },

    titleImage: {
        filter: "brightness(50%)",
    },

    body: {
        margin: theme.spacing(5),
    },

    bodyText: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

})))

function AboutPage() {
    const classes = useStyles();

    return(
        <Grid>
            <Grid className = {classes.titleMain}>
                <Grid className = {classes.titleImage}>
                    <img height = "400" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                        alt = "the outdoors" />
                </Grid>
                <Grid className = {classes.titleText}>
                    <Typography  variant = "h4">
                        ABOUT THE OGLE POINT
                    </Typography>
                </Grid>
            </Grid>
            <Grid className = {classes.body} container spacing = {2}> 
                <Grid xs = {6}>
                    <Typography variant = "h4">
                        ABOUT US
                    </Typography>
                    <Typography className = {classes.bodyText} color = "textSecondary">
                        <Typography variant = "body2" paragraph >
                        The Ogle Point is Nestled in Kosmos Village which has a unique atmosphere and curvy streets , situated on the Northern shores of the Hartbeespoort Dam, with the Magalies Mountains as a backdrop
                            and breath taking 180-degree views of Hartbeespoort Dam. It is less than an hour’s drive away from Johannesburg & Pretoria, and only 37kms away from Lanseria Airport. 		                               
                        </Typography>
                        <Typography variant = "body2" >
                            Accommodation includes a choice of Queen bed en suite, double bed en suite and single beds. Bathroom feature with a shower and become one with the bedroom with clever sliding-shutters. 
                                Rooms are space-clever and gives you more room to unpack, relax and make yourself at home.  A stay at The Ogle Point includes acess to the lounge area with breath taking views of the dam, 
                                a garden/patio where you can sit and  sail your thought to a tranquil sunset.
                        </Typography>
                    </Typography>
                </Grid>
                <Grid alignItems = "end" item xs = {6}>
                    <img height = "400" width = "100%" src = "https://media.istockphoto.com/photos/breakfast-in-bed-picture-id493769748?k=6&m=493769748&s=612x612&w=0&h=QcLH48--OoyNAQHaW5MV9t6aW6lw0VUP5C0J-4pHw_Y=" />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AboutPage;