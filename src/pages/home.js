import React from 'react';
import '../App.css';
import {HashLink} from 'react-router-hash-link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
  CardActions,
  Divider,
  Link, 
} from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';
//import Image from 'material-ui-image';
//import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    
    cardRoot: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    
    card: {
        maxWidth: 400, 
        height: 350,
      }, 

      cardImage: {
        height: 200, 
      }, 

      title: {
          marginLeft: theme.spacing(10),
          marginTop: theme.spacing(2),
      },
      subTitle: {
        marginLeft: theme.spacing(14),
    },
      bodyContent: {
        marginLeft: theme.spacing(10),
        margin: theme.spacing(5),
    },

    dividerTextMargin: {
        marginBottom: theme.spacing(3),
    }
}));

function CarouselComponent(slides) {

    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop autoPlay showThumbs showArrows>
                <div>
                    <img height = "400px" src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU' alt='travel image' />
                </div>
                <div>
                    <img height = "400px"  src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU' alt='travel image' />
                </div>
                <div>
                    <img height = "400px"  src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU' alt='travel image' />
                </div>
                <div>
                    <img height = "400px" src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU' alt='travel image' />
                </div>
            </Carousel>
        </div>
    );
}

function Homepage() {
    const classes = useStyles();   

    return (
        <Grid>
            <Grid className = {classes.slider}>
                <CarouselComponent />
            </Grid>
            <Typography className = {classes.title} variant = "h6">
                WELCOME TO THE OGLE POINT
            </Typography>
            <Typography className = {classes.subTitle} variant = "h10" color = "textPrimary">
                -YOUR PERFECT LEISURE DESTINATION
            </Typography>
            <Typography className = {classes.bodyContent} color = "textSecondary" variant = "body2">
                The Ogle Point is Nestled in Kosmos Village which has a unique atmosphere and curvy streets , situated on the Northern shores of the Hartbeespoort Dam, with the Magalies Mountains as a backdrop
                    and breath taking 180-degree views of Hartbeespoort Dam. It is less than an hour’s drive away 
                    from Johannesburg & Pretoria, and only 37kms away from Lanseria Airport
                    <Link href = "/about-us">
                        . More
                    </Link>
            </Typography>

            <Grid container spacing = {3}>
            <Grid align = "center" item xs = {3}>
                <SvgIcon>
                    <RestaurantIcon/>
                </SvgIcon>
                <Typography variant = "body2">
                    MONKEY SANCTUARY
                </Typography>
            </Grid>
            <Grid align = "center" item xs = {3}>
                <SvgIcon>
                    <RestaurantIcon/>
                </SvgIcon>
                <Typography variant = "body2">
                    LION & SAFARI PARK
                </Typography>
            </Grid>
            <Grid align = "center" item xs = {3}>
                <SvgIcon>
                    <RestaurantIcon/>
                </SvgIcon>
                <Typography variant = "body2">
                    CRADLE OF HUMANKIND
                </Typography>
            </Grid>
            <Grid align = "center" item xs = {3}>
                <SvgIcon>
                    <RestaurantIcon/>
                </SvgIcon>
                <Typography variant = "body2">
                    MOBILE ADVENTURES
                </Typography>
            </Grid>
            </Grid>

            <Grid className = {classes.cardRoot} container spacing = {3}>
                <Grid align = "center" item xs = {4}>
                    <Card className = {classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className = {classes.cardImage}
                        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dGsSW-6nYMRxO15fHuMfr8czlQaC_qOdcw&usqp=CAU'
                        title = 'image photo'
                        >                 
                        </CardMedia>
                        <CardContent>    
                        <Typography variant = "h5">
                            PREMIUM ROOMS
                        </Typography>
                        <Typography variant = "body2" paragraph>
                            Prices: R1000 - R2000
                        </Typography>
                            <Button href = "/accomodation/#premium-rooms" variant = "outlined">
                                <HashLink to = "accomodation/#premium-room" style={{ textDecoration: 'none', color: "#212121" }}>
                                    View Rooms 
                                </HashLink>
                            </Button>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>

                <Grid align = "center" item xs = {4}>
                <Card className = {classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className = {classes.cardImage}
                        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dGsSW-6nYMRxO15fHuMfr8czlQaC_qOdcw&usqp=CAU'
                        title = 'image photo'
                        >                 
                        </CardMedia>
                        <CardContent>
                            <Typography variant = "h5">
                            FAMILY ROOMS
                            </Typography>
                            <Typography variant = "body2" paragraph>
                            Prices: R1000 - R2000
                            </Typography>   
                            <Button variant = "outlined">
                                <HashLink to = "accomodation/#family-room" style={{ textDecoration: 'none', color: "#212121" }}>
                                    View Rooms 
                                </HashLink>
                            </Button>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                
                <Grid align = "center" item xs = {4}>
                <Card className = {classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className = {classes.cardImage}
                        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dGsSW-6nYMRxO15fHuMfr8czlQaC_qOdcw&usqp=CAU'
                        title = 'image photo'
                        >                 
                        </CardMedia>
                        <CardContent>
                        <Typography variant = "h5">
                            DELUXE ROOMS
                        </Typography>
                        <Typography variant = "body2" paragraph>
                            Prices: R1000 - R2000
                        </Typography>
                        <Button href = "/accomodation" variant = "outlined" >
                                <HashLink to = "accomodation/#deluxe-room" style={{ textDecoration: 'none', color: "#212121" }}>
                                    View Rooms 
                                </HashLink>
                        </Button>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid align = "center" item xs = {6}>
                    <Card className = {classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className = {classes.cardImage}
                        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dGsSW-6nYMRxO15fHuMfr8czlQaC_qOdcw&usqp=CAU'
                        title = 'image photo'
                        >                 
                        </CardMedia>
                        <CardContent>    
                        <Typography variant = "h5">
                            STANDARD ROOMS
                        </Typography>
                        <Typography variant = "body2" paragraph>
                            Prices: R1000 - R2000
                        </Typography>
                            <Button href = "/accomodation" variant = "outlined">
                                <HashLink to = "accomodation/#standard-room" style={{ textDecoration: 'none', color: "#212121" }}>
                                    View Rooms 
                                </HashLink>
                            </Button>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>

                <Grid align = "center" item xs = {6}>
                <Card className = {classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className = {classes.cardImage}
                        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dGsSW-6nYMRxO15fHuMfr8czlQaC_qOdcw&usqp=CAU'
                        title = 'image photo'
                        >                 
                        </CardMedia>
                        <CardContent>
                            <Typography variant = "h5" >
                            FULL HOUSE WITH A HOST
                            </Typography>
                            <Typography variant = "body2" paragraph>
                            Prices: R1000 - R2000
                            </Typography>
                            <Button href = "/accomodation" variant = "outlined">
                                <HashLink to = "accomodation/#full-house-host" style={{ textDecoration: 'none', color: "#212121" }}>
                                    View Rooms 
                                </HashLink>
                            </Button>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <Divider variant = "middle" />

            <Grid align = "center">
                <Button href = "pms online bookings">
                    <Typography className = {classes.dividerTextMargin}>
                        PMS Online Bookings
                    </Typography>
                </Button>
            </Grid>
        </Grid>
);
}

export default Homepage;