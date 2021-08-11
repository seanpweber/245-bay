//React
import { React, Component } from 'react'

//Styles
import { withStyles } from '@material-ui/styles'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core/'

//Components
import AdminBtn from './AdminBtn'

//Theme
import theme from '../components/Theme'

const styles = () => ({
   root: {
      flexGrow: 1,
   },
   appBar: {
      background: theme.palette.primary.mainGradientReverse,
   },
   copyright: {
      flexGrow: 1,
      marginLeft: '1em',
   },
   adminBtn: {
      color: 'white',
   },
   hide: {
      visibility: 'hidden',
   },
})
class Footer extends Component {
   handleChange = (index) => {
      // Here, we invoke the callback with the new value
      this.props.transition(index)
   }

   render() {
      const { classes } = this.props

      return (
         <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
               <Toolbar>
                  <Typography className={classes.copyright} variant='body1'>
                     © 2021 245 Bay
                  </Typography>
                  <AdminBtn transition={this.handleChange} />
               </Toolbar>
            </AppBar>
         </div>
      )
   }
}

export default withStyles(styles)(Footer)
