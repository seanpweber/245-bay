//React
import { React, Component, Fragment } from 'react';

//Styles
import { withStyles } from '@material-ui/styles';
import { Button, SwipeableDrawer } from '@material-ui/core';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

//Libraries
import PropTypes from 'prop-types';

//Components
import MenuList, { AdminPanel } from './MenuLists';

//Theme
import theme from '../components/Theme';

const styles = () => ({
   root: {
      '& .MuiPaper-root': {
         background: theme.palette.lucent.mainOpacity,
      },
   },
   list: {
      width: 250,
   },
   fullList: {
      width: 'auto',
   },
   icon: {
      color: 'white',
      height: '100%',
   },
   box: {
      height: '100%',
   },
});

class Menu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false,
      };
   }

   handleChange = (index) => {
      // Here, we invoke the callback with the new value
      this.props.transition(index);
   };

   render() {
      const { classes } = this.props;

      const toggleDrawer = (open) => (event) => {
         if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
         ) {
            return;
         }

         this.setState({
            open: open,
         });
      };

      return (
         <div>
            <Fragment key={this.props.side}>
               <Button className={classes.icon} onClick={toggleDrawer(true)}>
                  {this.props.admin ? <PersonIcon /> : <MenuIcon />}
               </Button>
               <SwipeableDrawer
                  className={classes.root}
                  anchor={this.props.side}
                  open={this.state.open}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}>
                  <div
                     className={classes.list}
                     role='presentation'
                     onClick={toggleDrawer(false)}
                     onKeyDown={toggleDrawer(false)}>
                     {this.props.admin ? (
                        <AdminPanel transition={this.handleChange} />
                     ) : (
                        <MenuList transition={this.handleChange} />
                     )}
                  </div>
               </SwipeableDrawer>
            </Fragment>
         </div>
      );
   }
}

Menu.propTypes = {
   classes: PropTypes.object.isRequired,
   menu: PropTypes.bool,
   admin: PropTypes.bool,
};

export default withStyles(styles)(Menu);
