//React
import React from 'react';

//Styles
import { makeStyles, mergeClasses } from '@material-ui/styles';
import 
    { 
        AppBar, 
        Container, 
        Toolbar, 
        Typography
    }
from '@material-ui/core/';  

//Theme
import theme from '../components/Theme';

const styles = makeStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: theme.palette.primary.mainGradientReverse,
    },
    copyright: {
      justifyContent: 'center',
    }
})

export default function Footer() {
    const classes = styles();

    return (
        <div className={classes.root}>
            <AppBar 
                position="static"
                className={classes.appBar}
            >
                <Container maxWidth="md">
                    <Toolbar className={classes.copyright}>
                        <Typography
                            variant="body1" 
                            color="inherit"
                        >
                            © 2021 Sean P. Weber
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}