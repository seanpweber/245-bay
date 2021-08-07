//React
import { React, Component } from 'react';
import { Link } from 'react-router-dom';

//Styles
import { List, 
    ListItem,
    ListItemIcon, 
    ListItemText, 
    Divider 
} from '@material-ui/core';

//Icons
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ImageIcon from '@material-ui/icons/Image';
import MailIcon from '@material-ui/icons/Mail'

class MenuList extends Component {
    render() {
        return(
            <div>
                <List>
                    <ListItem 
                        button 
                        component={Link} 
                        to="/"
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItem>
                    <ListItem 
                        button 
                        component={Link} 
                        to="/aboutus"
                    >
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText>
                            About Us
                        </ListItemText>
                    </ListItem>
                    <ListItem 
                        button 
                        component={Link} 
                        to="/gallery"
                    >
                        <ListItemIcon>
                            <ImageIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Gallery
                        </ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem 
                        button 
                        component={Link} 
                        to="/contactus"
                    >
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Contact Us
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default MenuList;

export function AdminPanel() {
    return (
        <div>
            <List>
                <ListItem
                    button
                    component={Link}
                    to="/"
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItem>

                <Divider />

                <ListItem 
                    button 
                    component={Link} 
                    to="/aboutus"
                >
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Edit "About Us"
                    </ListItemText>
                </ListItem>
                <ListItem
                    button 
                    component={Link} 
                    to="/gallery"
                >
                    <ListItemIcon>
                        <ImageIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Upload Image
                    </ListItemText>
                </ListItem>
                <ListItem 
                    button 
                    component={Link} 
                    to="/contactus"
                >
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Settings
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    )
}