//React
import React from 'react';

//Styles
import { makeStyles } from '@material-ui/core/styles';
import 
    {
        Grid, 
        Container, 
        Avatar, 
        Typography, 
        TextField, 
        Button, 
        CssBaseline 
    }
from '@material-ui/core';

//Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

//Theme
import theme from './Theme';

const styles = makeStyles((style) => ({
    root: {
        height: '100vh',
    },
    paper: {
        background: theme.palette.lucent.mainOpacity,
        padding: '1.5rem',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: style.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: style.spacing(1),
    },
    submit: {
        margin: style.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = styles();

    return (
        <Container
            component="main"
            maxWidth="xs"
        >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Admin Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="User"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
}