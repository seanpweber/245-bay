//React
import { React, Component } from 'react';
import { Link } from 'react-router-dom';

//Styles
import { withStyles } from '@material-ui/styles';
import { AppBar, 
  Toolbar, 
  Typography
} 
from '@material-ui/core';

//Components
import Menu from './Menu';

//Theme
import theme from './Theme';


const styles = () => ({
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

class Nav extends Component {
  handleChange = (index) => {
    // Here, we invoke the callback with the new value
    this.props.transition(index);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar 
          position="fixed" 
          className={classes.appBar}
        >
          <Toolbar>
            <Menu side='left' transition={this.handleChange} />
            <Typography
              component={Link}
              to="/home"
              variant="h6"
              className={classes.title}
            >
              245 Bay
            </Typography>
            <div>
              <Menu admin side='right' transition={this.handleChange} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Nav);