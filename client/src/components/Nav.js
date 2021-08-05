//React
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { makeStyles } from '@material-ui/styles';
import 
    { 
        AppBar, 
        Toolbar, 
        Typography, 
        IconButton 
    } 
from '@material-ui/core';

//Icons
import MenuIcon from '@material-ui/icons/Menu';

//Components
import Menu from './Menu';

//Theme
import theme from './Theme';


const styles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: theme.palette.primary.mainGradient,
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none',
  },
  hide: {
    flexGrow: 0,
    visibility: 'hidden', 
  }
});

export default function Nav() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar 
        position="fixed" 
        className={classes.appBar}
      >
        <Toolbar>
          <Menu />
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            245 Bay
          </Typography>
          <div className={classes.hide}>
            <Menu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}