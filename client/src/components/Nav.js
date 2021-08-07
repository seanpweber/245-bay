//React
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { makeStyles } from '@material-ui/styles';
import { AppBar, 
  Toolbar, 
  Typography
} 
from '@material-ui/core';

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
    textAlign: 'center',
  },
  hide: {
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
          <Menu side='left'/>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            245 Bay
          </Typography>
          <div>
            <Menu admin side='right' />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}