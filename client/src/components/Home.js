//React
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { makeStyles } from '@material-ui/core/styles';
import 
    { 
        Grid, 
        Container, 
        Paper,
        Button, 
        CssBaseline 
    } 
from '@material-ui/core';

//Theme
import theme from '../components/Theme';

const styles = makeStyles({
    grid: {
        flexGrow: 1,
    }
})

export default function Home() {
    const classes = styles();

    return (
        <Container
            component="main"
            maxWidth="xs"
        >
            <CssBaseline />
            <Paper>
                <Grid 
                    container
                    spacing={2}
                    justifyContent="center"
                >
                    <Grid
                        item
                        fullWidth
                        className={classes.grid}
                    >
                        <Button 
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/gallery"
                        >
                            Take a tour!
                        </Button>
                    </Grid>
                    <Grid
                        item
                        fullWidth
                        className={classes.grid}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to="/contactus"
                        >
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}