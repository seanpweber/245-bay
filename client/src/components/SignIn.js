//React
import React from 'react'

//Styles
import { withStyles } from '@material-ui/styles'
import { Avatar, Typography, TextField, Button } from '@material-ui/core'

//Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

//Components
import Card from './Card'

//Theme
import theme from './Theme'
import { Component } from 'react'

const styles = (style) => ({
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
})

class SignIn extends Component {
   render() {
      const { classes } = this.props

      return (
         <Card width='xs'>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
               Admin Sign in
            </Typography>
            <form className={classes.form} noValidate>
               <TextField
                  type='password'
                  variant='outlined'
                  color='secondary'
                  margin='normal'
                  id='key'
                  name='key'
                  label='Admin Key'
                  fullWidth
                  autoFocus
                  required
               />
               <Button
                  type='submit'
                  variant='contained'
                  color='secondary'
                  fullWidth
                  className={classes.submit}>
                  Sign In
               </Button>
            </form>
         </Card>
      )
   }
}

export default withStyles(styles)(SignIn)
