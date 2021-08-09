//React
import React from 'react';

//Styles
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, 
    Typography, 
    TextField, 
    Button, 
} from '@material-ui/core';

//Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

//Components
import Card from './Card';

//Theme
import theme from './Theme';

const styles = makeStyles((style) => ({
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
        <Card width="xs">
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
                    name="key"
                    label="Admin Key"
                    type="password"
                    id="key"
                    autoFocus
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
        </Card>
    );
}