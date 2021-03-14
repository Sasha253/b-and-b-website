import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { 
    Grid, 
    Typography,
    Button,
    Card, 
    CardActionArea, 
    CardMedia,
    Dialog,
    DialogTitle, 
    DialogActions
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

const premium_room_dining = [
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFkruHHYeoCoTlziF5v0XSzIyB9WdUFG_kw&usqp=CAU'},
];

const premium_room_garden = [
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"},
];

const useStyles = makeStyles((theme) => ({
    card: {
        position: "relative",
      },

    body: {
        margin: "15px",
    },

    hide: {
        display: "none",
    },

    cardText: {
        display: "block",
        position: "absolute",
        top: "80%",
        width: "20%",
        textAlign: "center",
        color: "white",

      }, 

    titleMain: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        marginBottom: "10px",
    },

    titleImage: {
        filter: "brightness(50%)",
    },

    main: {
        margin: theme.spacing(3),
    },

    titleText: {
        position: 'absolute',
        top: '50%',
        left: '45%',
    },      
    title: {
        marginTop: theme.spacing(3), 
        marginBottom: theme.spacing(3), 
    }
}))

function GalleryDisplay(props) {
    const classes = useStyles();
    const { card_name, onClose, open } = props;
  
    const handleClose = () => {
        onClose();
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">
            Common Area
            <DialogActions>
            <Button onClick = {handleClose}>
                <CancelIcon />
            </Button>
            </DialogActions>
        </DialogTitle>
        {(() => {
            switch (card_name) {
                case "Premium Room": return (
                    <img height = "100px" width = "100px" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU" />
                )
                case "Standard Room": return (
                    <img height = "100px" width = "100px" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqqSHEjUUG244wr5TSqcJcMRgflwvAvHH0g&usqp=CAU" />
                )
                case "Family Room": return (
                    <img height = "100px" width = "100px" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU" />
                )
                case "Deluxe Room": return (
                    <img height = "100px" width = "100px" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU" />
                )
                case "Full House Room": return (
                    <img height = "100px" width = "100px" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU" />
                )
        }
    })()}

      </Dialog>
    );
  }

function GalleryPage() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = (param) => {
      setOpen(true);
      foo(param);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [card_name, setCardName] = React.useState(null);

    const foo = (param) => {
        setCardName(param);
    };

    return(
        <Grid>
            <Grid className = {classes.titleMain}>
                <Grid className = {classes.titleImage}>
                    <img height = "400" width = "100%" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                        alt = "the outdoors" />
                </Grid>
                <Grid className = {classes.titleText}>
                    <Typography  variant = "h4">
                        GALLERY
                    </Typography>
                </Grid>
            </Grid>
            <Typography align = "center" variant = "body1" paragraph>
                Click on the image to view gallery
            </Typography>
            <Grid className = {classes.body}>
                <Typography variant = "h5" paragraph>
                    PREMIUM ROOM
                </Typography>
                <Grid container spacing = {2}>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea onClick = {() => handleClickOpen("Premium Room")} >
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "200"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>   
            <Grid className = {classes.body}>
                <Typography variant = "h5" paragraph>
                    FAMILY ROOM
                </Typography>
                <Grid container spacing = {2}>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea onClick = {() => handleClickOpen("Standard Room")}>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "200"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>  
            <Grid className = {classes.body}>
                <Typography variant = "h5" paragraph>
                    DELUXE ROOM
                </Typography>
                <Grid container spacing = {2}>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "200"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>  
            <Grid className = {classes.body}>
                <Typography variant = "h5" paragraph>
                  STANDARD ROOM
                </Typography>
                <Grid container spacing = {2}>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "200"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>  
            <Grid className = {classes.body}>
                <Typography variant = "h5" paragraph>
                    FULL HOUSE WITH A HOST
                </Typography>
                <Grid container spacing = {2}>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "200"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card className = {classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    component = "img"
                                    alt = "room"
                                    height = "300"
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpfhmZ1ey0VylJT5sdfxarD72JpUtHqfMnA&usqp=CAU"
                                    title = "room"
                                    >
                                    
                                </CardMedia>
                                <Typography className = {classes.cardText} gutterBottom>
                                    Common Area
                                </Typography>
                                <Typography variant = "body2">
                                    Total 5 photos
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <GalleryDisplay card_name = {card_name} open={open} onClose={handleClose} />
            </Grid>      
        </Grid>
    );
}

export default GalleryPage;