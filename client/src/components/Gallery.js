//React
import React from 'react';

//Styles
import { makeStyles } from '@material-ui/styles';
import { Typography, 
    Divider,
    Button,  
    Grid, 
    CssBaseline
} from '@material-ui/core';

//Components
import Card from './Card';

export default function Gallery() {
    return (
            <Card width="md">
                <Typography
                    component="h1"
                    variant="h5"
                >
                    Gallery
                </Typography>
            </Card>
    )
}