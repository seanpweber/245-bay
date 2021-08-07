//React
import React from 'react';

//Styles
import { makeStyles } from '@material-ui/styles';
import { Container,
    Paper,
    Typography, 
    Divider,
    Button,  
    Grid, 
    CssBaseline
} from '@material-ui/core';

export default function Gallery() {
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
                    Gallery
                </Typography>
            </Paper>
        </Container>
    )
}