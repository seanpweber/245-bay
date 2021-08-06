//React
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { makeStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';

//Icons
import LockIcon from '@material-ui/icons/Lock';

const styles = makeStyles({
    icon: {
        color: 'white',
        fontSize: '0.75em',
    }
})

export default function AdminBtn() {
    const classes = styles();

    return (
        <IconButton component={Link} to='/admin/signin'>
            <LockIcon className={classes.icon} />
        </IconButton>
    )
}