//React
import { React, Component } from 'react';

//Styles
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

//Dependencies
import PropTypes from 'prop-types';

//Components
import Trans from './Trans'

const styles = () => ({
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
                    justifyContent="center"
                    direction="column"
                >
                    <Grid item>
                        {this.props.children}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

BodyGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyGrid);