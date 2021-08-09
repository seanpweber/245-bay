//React
import { React, Component } from 'react'

//Styles
import { withStyles } from '@material-ui/styles'
import {
   Typography,
   Divider,
   Button,
   Grid,
   CssBaseline,
} from '@material-ui/core'

//Components
import Card from './Card'

const styles = () => ({
   root: {},
})

class About extends Component {
   render() {
      return (
         <Card width='sm'>
            <Typography component='h1' variant='h5'>
               About Us
            </Typography>
         </Card>
      )
   }
}

export default withStyles(styles)(About)
