//React
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { makeStyles } from '@material-ui/core/styles';
import 
    { 
        Grid, 
        Container, 
        Button, 
        CssBaseline 
    } 
from '@material-ui/core';

//Theme
import theme from '../components/Theme';

const styles = makeStyles({
    paper: {
      background: 'rgba(255, 255, 255, 0.7)',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
})

export default function Home() {
    const classes = styles();

    return (
        <Container
            component="main"
            maxWidth="sm"
        >
            <CssBaseline />
            <div className={classes.paper}>
                <Grid 
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Button 
                            variant="contained"
                            color="primary"
                            style={{ background: theme.palette.primary.mainGradientReverse }}
                            component={Link}
                            to="/gallery"
                        >
                            Take a tour!
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ background: theme.palette.secondary.mainGradient }}
                            component={Link}
                            to="/contactus"
                        >
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}