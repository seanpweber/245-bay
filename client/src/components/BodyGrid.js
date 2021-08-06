//React
import { React, Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Styles
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import PropTypes from 'prop-types';

//Components
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import SignIn from './SignIn';
import ReactUploadImage from './ReactUploadImage';

const styles = theme => ({
    root: {
        height: '100vh',
    }
})

class BodyGrid extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div id="content">
                <Grid
                    container
                    className={classes.root}
                    spacing={0}
                    align="center"
                    justify="center"
                    direction="column"
                >
                    <Grid item>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/aboutus" component={About} />
                            <Route exact path="/gallery" component={Gallery} />
                            <Route exact path="/contactus" component={Contact} />
                            <Route exact path="/admin/signin" component={SignIn} />
                            <Route exact path="/admin/upload" component={ReactUploadImage} />
                        </Switch>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(BodyGrid);