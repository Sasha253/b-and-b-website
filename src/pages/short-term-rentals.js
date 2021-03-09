import React from 'react';
import { 
    Grid, 
    makeStyles, 
    Typography,
    Button,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    titleMain: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },

    titleImage: {
        filter: "brightness(40%)",
    },

    titleImageText: {
        position: 'absolute',
        top: '50%',
        left: '40%',
    },
    titleImageButton: {
        margin: theme.spacing(6),
    },
        
}))

function ShortTermRentalsPage() {
    const classes = useStyles();

    return (
        <Grid>
            <Grid className = {classes.titleMain}>
                <Grid className = {classes.titleImage}>
                    <img height = "400" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                        alt = "the outdoors" />
                </Grid>
                <Grid className = {classes.titleImageText}>
                    <Typography  variant = "h4">
                        HOTEL BOOKINGS
                    </Typography>
                    <Button className = {classes.titleImageButton} variant = "contained">
                        BOOK NOW
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ShortTermRentalsPage;