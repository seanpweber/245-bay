//React
import React from 'react';

//Styles
import { makeStyles, mergeClasses } from '@material-ui/styles';
import { AppBar, 
    Container, 
    Toolbar, 
    Typography
} from '@material-ui/core/';

//Components
import AdminBtn from './AdminBtn';

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
      flexGrow: 1,
      marginLeft: '1em',
    },
    adminBtn: {
        color: 'white',
    },
    hide: {
      visibility: 'hidden', 
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
                <Toolbar>
                    <Typography 
                        className={classes.copyright}
                        variant="body1" 
                    >
                        © 2021 Sean P. Weber
                    </Typography>
                    <AdminBtn />
                </Toolbar>
            </AppBar>
        </div>
    )
}