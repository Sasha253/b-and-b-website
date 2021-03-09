import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
}));

const SLIDE_INFO = {
    image1: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.bstatic.com%2Fimages%2Fhotel%2Fmax1024x768%2F785%2F78581454.jpg&imgrefurl=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fza%2Fhunters-b-amp-b.html&tbnid=ftWvccbjTWFbJM&vet=12ahUKEwi3-ZODlpzvAhWC4oUKHa06AoUQMygxegUIARCKAg..i&docid=Tlu15cAX5OTeTM&w=960&h=639&q=b%26b%20images&ved=2ahUKEwi3-ZODlpzvAhWC4oUKHa06AoUQMygxegUIARCKAg', 
    image2: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fexp.cdn-hotels.com%2Fhotels%2F43000000%2F42520000%2F42516800%2F42516778%2F807b8c79_z.jpg%3Fimpolicy%3Dfcrop%26w%3D500%26h%3D333%26q%3Dhigh&imgrefurl=https%3A%2F%2Fza.hotels.com%2Fho1361536896%2Fb-b-gerace-badolato-italy%2F&tbnid=Wy3hf9M9R8AvrM&vet=12ahUKEwi3-ZODlpzvAhWC4oUKHa06AoUQMyg6egQIARA6..i&docid=juEhklRYGeLjyM&w=500&h=333&itg=1&q=b%26b%20images&ved=2ahUKEwi3-ZODlpzvAhWC4oUKHa06AoUQMyg6egQIARA6', 
    image3: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wheretostay.co.za%2Fresources%2F0%2F3%2F6%2F03602%2F136037_xl.jpg&imgrefurl=https%3A%2F%2Fwww.wheretostay.co.za%2Fwestville-bed-and-breakfast-accommodation-westville-durban&tbnid=J3NxVrfqtPFUPM&vet=12ahUKEwi3-ZODlpzvAhWC4oUKHa06AoUQMyg9egQIARBA..i&docid=_i9FnFh6Q66hZM&w=800&h=534&q=b%26b%20images&ved=2ahUKEwi3-ZODlpzvAhWC4oUKHa06AoUQMyg9egQIARBA', 
    image4: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sara-lee.co.za%2Fwp-content%2Fuploads%2F2017%2F05%2FMatatiele-bed-and-breakfast-red-double-room.jpg&imgrefurl=https%3A%2F%2Fsara-lee.co.za%2F&tbnid=YJxYuem9QsCSWM&vet=12ahUKEwi3-ZODlpzvAhWC4oUKHa06AoUQMyg7egQIARA8..i&docid=yQl0KqX0CkkTnM&w=1900&h=911&q=b%26b%20images&ved=2ahUKEwi3-ZODlpzvAhWC4oUKHa06AoUQMyg7egQIARA8'
};

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

    return (
        <div onClick={clickFunction}>{icon}</div>  
    );
}

function TitleCarousel(props) {
    const image = props.content;

    return (
        <Grid>
            <img height = '200' width = "100%" src = {image} alt = "room"/>
        </Grid>
    );
}

function Homepage() {
    const classes = useStyles();

    const [index, setIndex] = React.useState(0);
    const image = SLIDE_INFO[0];
    const numSlides = SLIDE_INFO.length;

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        setIndex(newIndex);
    };

    return (
        <Grid>
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <TitleCarousel content = {image} />
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
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
                    <Typography variant = "h4">
                        HOTEL BOOKINGS
                    </Typography>
                    <Typography variant = "body2">
                        Prices: R1000 - R2000
                    </Typography>
                    <CardActions>
                        <Button href = "accomodations" color = "default">
                            View Rooms
                        </Button>
                    </CardActions>
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
                        <Typography variant = "h4">
                        SALES & LONG TERM RENTALS
                        </Typography>
                        <Typography variant = "body2">
                        Prices: R1000 - R2000
                        </Typography>
                        <Button href = "accomodations" color = "default">
                        View Rooms
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
                    <Typography variant = "h4">
                        SHORT TERM, RENTALS
                    </Typography>
                    <Typography variant = "body2">
                        Prices: R1000 - R2000
                    </Typography>
                    <Button href = "accomodations" color = "default">
                        View Rooms
                    </Button>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            </Grid>

            <Divider variant = "middle" />

            <Grid align = "center">
                <Button href = "pms online bookings">
                        PMS Online Bookings
                </Button>
            </Grid>
        </Grid>
);
}

export default Homepage;