//React
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { makeStyles } from '@material-ui/styles';
import 
    { 
        List, 
        ListItem, 
        ListItemIcon, 
        ListItemText, 
        Divider, 
        Button, 
        SwipeableDrawer  
    } 
from '@material-ui/core';

//Icons
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ImageIcon from '@material-ui/icons/Image';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

//Libraries
import clsx from 'clsx';

import theme from '../components/Theme';

const useStyles = makeStyles({
    root: {
        '& .MuiPaper-root': {
            background: theme.palette.lucent.mainOpacity,
        }
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    white: {
        color: 'white',
    }
});

export default function Menu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/aboutus">
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText>About Us</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/gallery">
            <ListItemIcon><ImageIcon /></ListItemIcon>
            <ListItemText>Gallery</ListItemText>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button component={Link} to="/contactus">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText>Contact Us </ListItemText>
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className={classes.white} /></Button>
          <SwipeableDrawer
            className={classes.root}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}