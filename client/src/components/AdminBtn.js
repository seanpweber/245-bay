//React
import { React, Component } from 'react'
import { Link } from 'react-router-dom'

//Styles
import { withStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'

//Icons
import LockIcon from '@material-ui/icons/Lock'

const styles = () => ({
   icon: {
      color: 'white',
      fontSize: '0.75em',
   },
})

class AdminBtn extends Component {
   handleChange = (event) => {
      if ('/' + event.currentTarget.id === window.location.pathname) {
         event.preventDefault()
      } else {
         // Here, we invoke the callback with the new value
         this.props.transition(event.currentTarget.id)
      }
   }

   render() {
      const { classes } = this.props

      return (
         <IconButton
            component={Link}
            to='/admin/signin'
            onClick={this.handleChange}>
            <LockIcon className={classes.icon} />
         </IconButton>
      )
   }
}

export default withStyles(styles)(AdminBtn)
