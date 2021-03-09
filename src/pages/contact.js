import React from 'react';
import { 
    Grid, 
    makeStyles, 
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme => ({
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
}))) 

function ContactPage() {
    const classes = useStyles();

    return (
        <Grid>
            <Grid className = {classes.titleImage}>
                <img height = "400" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                        alt = "the outdoors" />
                <Grid className = {classes.titleImageText}>
                    <Typography  variant = "h4">
                        CONTACT US
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ContactPage;