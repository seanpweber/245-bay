//React
import React from 'react';

//Styles
import { makeStyles } from '@material-ui/styles';
import 
    { 
        Container,
        Typography, 
        Divider,
        Button,  
        Grid, 
        CssBaseline
    } 
from '@material-ui/core';
import card from './Cards';

export default function Gallery() {
    const cards = card();

    return (
        <Container
            component="main"
            maxWidth="md"
        >
            <div className={cards.paper}>
                <Typography
                    component="h1"
                    variant="h5"
                >
                    Gallery
                </Typography>
            </div>
        </Container>
    )
}