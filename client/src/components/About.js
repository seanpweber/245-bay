//React
import { React, Component } from 'react';

//Styles
import { withStyles } from '@material-ui/styles';
import {
   Avatar,
   Typography,
   Divider,
   Button,
   Grid,
   CssBaseline,
} from '@material-ui/core';

//Icons
import { PeopleIcon } from '@material-ui/icons/People';

//Components
import Card from './Card';

//Theme
import theme from './Theme';

const styles = (style) => ({
   avatar: {
      margin: style.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   },
});

class About extends Component {
   render() {
      const { classes } = this.props;

      return (
         <Card width='sm'>
            <Avatar className={classes.avatar } />
            <Divider />
            <Typography component='p' variant='body1'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
         </Card>
      );
   }
}

export default withStyles(styles)(About);
