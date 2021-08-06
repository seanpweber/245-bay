//React
import React from 'react';

//Styles
import { makeStyles } from '@material-ui/styles';
import 
    { 
        Container,
        Paper,
        Typography, 
        Divider,
        Button,  
        Grid, 
        CssBaseline
    } 
from '@material-ui/core';

export default function About() {

    return (
        <Container
            component="main"
            maxWidth="md"
        >
            <Paper>
                <Typography
                    component="h1"
                    variant="h5"
                >
                    About Us
                </Typography>
            </Paper>
        </Container>
    )
}