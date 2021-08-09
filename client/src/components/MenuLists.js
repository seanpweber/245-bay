//React
import { React, Component } from 'react'
import { Link } from 'react-router-dom'

//Styles
import {
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Divider,
} from '@material-ui/core'

//Icons
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import ImageIcon from '@material-ui/icons/Image'
import MailIcon from '@material-ui/icons/Mail'
import SettingsIcon from '@material-ui/icons/Settings'

let PATH = window.location.pathname

class MenuList extends Component {
   handleChange = (event) => {
      if ('/' + event.currentTarget.id === window.location.pathname) {
         event.preventDefault()
      } else {
         // Here, we invoke the callback with the new value
         this.props.transition(event.currentTarget.id)
      }
   }

   render() {
      return (
         <div>
            <List>
               <ListItem
                  button
                  component={Link}
                  to='/home'
                  onClick={this.handleChange}
                  id='home'>
                  <ListItemIcon>
                     <HomeIcon />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
               </ListItem>
               <ListItem
                  button
                  component={Link}
                  to='/aboutus'
                  onClick={this.handleChange}
                  id='aboutus'>
                  <ListItemIcon>
                     <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>About Us</ListItemText>
               </ListItem>
               <ListItem
                  button
                  component={Link}
                  to='/gallery'
                  onClick={this.handleChange}
                  id='gallery'>
                  <ListItemIcon>
                     <ImageIcon />
                  </ListItemIcon>
                  <ListItemText>Gallery</ListItemText>
               </ListItem>
            </List>
            <Divider />
            <List>
               <ListItem
                  button
                  component={Link}
                  to='/contactus'
                  onClick={this.handleChange}
                  id='contactus'>
                  <ListItemIcon>
                     <MailIcon />
                  </ListItemIcon>
                  <ListItemText>Contact Us</ListItemText>
               </ListItem>
            </List>
         </div>
      )
   }
}

export default MenuList

export class AdminPanel extends Component {
   render() {
      return (
         <div>
            <List>
               <ListItem
                  button
                  component={Link}
                  to='/'
                  onClick={this.handleChange}
                  id={1}>
                  <ListItemIcon>
                     <HomeIcon />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
               </ListItem>

               <Divider />

               <ListItem
                  button
                  component={Link}
                  to='/aboutus'
                  onClick={this.handleChange}
                  id='aboutus'>
                  <ListItemIcon>
                     <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>Edit Bio</ListItemText>
               </ListItem>
               <ListItem
                  button
                  component={Link}
                  to='/gallery'
                  onClick={this.handleChange}
                  id='gallery'>
                  <ListItemIcon>
                     <ImageIcon />
                  </ListItemIcon>
                  <ListItemText>Upload Image</ListItemText>
               </ListItem>
               <ListItem
                  button
                  component={Link}
                  to='/contactus'
                  onClick={this.handleChange}>
                  <ListItemIcon>
                     <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
               </ListItem>
            </List>
         </div>
      )
   }
}
