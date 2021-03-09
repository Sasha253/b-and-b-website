import {createMuiTheme} from '@material-ui/core'

const footerTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#0f0e0e" //black
        },
        secondary: {
            main: "#C28336" //grey
        },
    }
});

const headerTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#757575" //grey
        },
        secondary: {
            main: "#382f24" //darker grey
        },
    }
});

const mainTheme = createMuiTheme({
    palletter: {
        primary: {
            main: "#90806d" //brown
        },
        secondary: {
            main: "#C28336" //grey
        },
    }
});

export {footerTheme, headerTheme};