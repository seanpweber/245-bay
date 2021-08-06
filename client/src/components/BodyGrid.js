//React
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Styles
import { makeStyles } from '@material-ui/styles';
import { Grid, Slide } from '@material-ui/core';

//Components
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import SignIn from './SignIn';
import ReactUploadImage from './ReactUploadImage';

const styles = makeStyles({
    root: {
        height: '100vh',
        '& .MuiButtonBase-root': {
            borderRadius: "2rem",
        }
    }
})

const states = ["home", "aboutus", "gallery", "contactus", "/admin/signin", "/admin/upload"]
const transitionDuration = 300;

// function Transition(props) {
//     return <Slide direction="up" {...props} />;
// }

export default function BodyGrid() {
    const classes = styles();

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
                        <Route exact path="/" component={Home} />
                        <Route exact path="/aboutus" component={About} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/contactus" component={Contact} />
                        <Route exact path="/admin/signin" component={SignIn} />
                        <Route exact path="/admin/upload" component={ReactUploadImage} />
                </Grid>
            </Grid>
        </div>
    )
}