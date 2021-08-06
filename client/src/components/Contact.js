import React from 'react';

//Styles
import { makeStyles } from '@material-ui/styles';
import 
    { 
        Container,
        Typography, 
        TextField, 
        Divider,
        Button,  
        Grid, 
        CssBaseline
    } 
from '@material-ui/core';
import card from './Cards';

//Libraries
import * as emailjs from 'emailjs-com';

//Theme
import theme from './Theme';

const styles = makeStyles({
    divider: {
        marginTop: '0.5rem',
        marginBottom: '0.7rem',
    },
});

export default function Contact() {
    const classes = styles();
    const cards = card();

    return (
        <Container
            component="main"
            maxWidth="sm"
        >
            <CssBaseline />
            <div className={cards.paper}>
                <Typography 
                    component="h1" 
                    variant="h5"
                >
                    Contact Us
                </Typography>
                <form 
                    className={classes.form}
                    spacing={1}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
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
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color="secondary"
                                spacing={2}
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
            </div>
        </Container>
    )
}

// class Email extends Component {
//     state = {
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     }
    
//     handleChange = (param, event) => {
//         this.setState({ [param]: event.target.value })
//     }
    
//     handleSend() {
//         const { name, email, subject, message } = this.state
//         if (name === '' || email === '' || subject === '' || message === '') {
//             alert("Please complete the form!");
//             return;
//         } else {
//             let templateParams = {
//                 name: name,
//                 email: email,
//                 to_name: 'Sean',
//                 subject: subject,
//                 message: message,
//             }

//             emailjs.send(
//                 'my_dev_gmail',
//                 'template_j6ztv0i',
//                 templateParams,
//                 'user_e2SBprNH4w0Ma1Ze0RS4r'
//             )

//             this.showModal();
//             this.resetForm();
//         }
//     }

//     resetForm() {
//         this.setState({
//             name: '',
//             email: '',
//             subject: '',
//             message: '',
//         })
//     }

//     showModal() {
//         //sets element to be manipulated as #emailSent
//         var myID = document.getElementById("emailSent");
    
//         //shows modal
//         myID.style.display = "block";
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         this.handleSend();
//     }

//     render () {


//         return <div>
                
//         </div>
//     }
// }