//React
import { React, Component } from 'react'
import { Link } from 'react-router-dom'

//Styles
import { withStyles } from '@material-ui/core/styles'
import { Grid, Container, Paper, Button, CssBaseline } from '@material-ui/core'

//Components
import Card from './Card'

//Theme
import theme from '../components/Theme'

const styles = () => ({
   grid: {
      flexGrow: 1,
   },
})

class Home extends Component {
   render() {
      const { classes } = this.props

      return (
         <Card width='xs'>
            <Grid container spacing={2} justifyContent='center'>
               <Grid item fullWidth className={classes.grid}>
                  <Button
                     variant='contained'
                     color='primary'
                     component={Link}
                     to='/gallery'>
                     Take a tour!
                  </Button>
               </Grid>
               <Grid item fullWidth className={classes.grid}>
                  <Button
                     variant='outlined'
                     color='primary'
                     component={Link}
                     to='/contactus'>
                     Contact Us
                  </Button>
               </Grid>
            </Grid>
         </Card>
      )
   }
}

export default withStyles(styles)(Home)
