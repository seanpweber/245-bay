//React
import { React, Component } from 'react';

//Styles
import { withStyles } from '@material-ui/styles';
import 
    { 
        Container,
        Paper,
        Typography, 
        TextField, 
        Divider,
        Button,  
        Grid, 
        CssBaseline
    } 
from '@material-ui/core';

//Libraries
import * as emailjs from 'emailjs-com';
import PropTypes from 'prop-types';

const styles = theme => ({
    divider: {
        marginTop: '0.5rem',
        marginBottom: '0.7rem',
    }
});

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }
    
    handleChange = (param, event) => {
        this.setState({ [param]: event.target.value })
    }
    
    handleSend = () => {
        const { name, email, subject, message } = this.state
        if (name === '' || email === '' || subject === '' || message === '') {
            alert("Please complete the form!");
            return;
        } else {
            let templateParams = {
                name: name,
                email: email,
                to_name: 'Rick and Peter',
                subject: subject,
                message: message,
            }

            emailjs.send(
                'my_dev_gmail',
                'template_1lmptai',
                templateParams,
                'user_e2SBprNH4w0Ma1Ze0RS4r'
            )

            alert("Message Sent!")
            // this.showModal();
            this.resetForm();
        }
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }   

    showModal() {
        //sets element to be manipulated as #emailSent
        var myID = document.getElementById("emailSent");
    
        //shows modal
        myID.style.display = "block";
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.handleSend();
    }

    render(){
        const { classes } = this.props;

        return (
            <Container
                component="main"
                maxWidth="sm"
            >
                <CssBaseline />
                <Paper>
                    <Typography 
                        component="h1" 
                        variant="h5"
                    >
                        Contact Us
                    </Typography>
                    <form 
                        className={classes.form}
                        spacing={1}
                        onSubmit={this.handleSubmit.bind(this)}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this, 'name')}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this, 'email')}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="subject"
                            label="Subject"
                            name="subject"
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this, 'subject')}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}
                            multiline
                            rows={5}
                        />
                        <Divider className={classes.divider} />
                        <Grid 
                            container 
                            spacing={2}
                            justifyContent="flex-end"
                        >
                            <Grid 
                                item
                                fullWidth
                            >
                                <Button
                                    type="reset"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                    spacing={2}
                                    onClick={this.resetForm}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid 
                                item
                                fullWidth
                            >
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    spacing={2}
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Contact);