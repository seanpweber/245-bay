//React
import { React, Component, forwardRef } from 'react'

//Styles
import { withStyles } from '@material-ui/styles'
import {
   Typography,
   TextField,
   Divider,
   Button,
   Grid,
   Modal,
   Paper,
   Backdrop,
} from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

//Libraries
import * as emailjs from 'emailjs-com'
import PropTypes from 'prop-types'

//Components
import Card from './Card'

const styles = (theme) => ({
   divider: {
      marginTop: '0.5rem',
      marginBottom: '0.7rem',
   },
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
})

const Fade = forwardRef(function Fade(props, ref) {
   const { in: open, children, onEnter, onExited, ...other } = props
   const style = useSpring({
      from: { opacity: 0, marginBottom: '-200em ' },
      to: { opacity: open ? 1 : 0, marginBottom: '20em' },
      onStart: () => {
         if (open && onEnter) {
            onEnter()
         }
      },
      onRest: () => {
         if (!open && onExited) {
            onExited()
         }
      },
   })

   return (
      <animated.div ref={ref} style={style} {...other}>
         {children}
      </animated.div>
   )
})

Fade.propTypes = {
   children: PropTypes.element,
   in: PropTypes.bool.isRequired,
   onEnter: PropTypes.func,
   onExited: PropTypes.func,
}

class Contact extends Component {
   constructor(props) {
      super(props)
      this.state = {
         name: '',
         email: '',
         subject: '',
         message: '',
         open: false,
      }
   }

   handleChange = (param, event) => {
      this.setState({ [param]: event.target.value })
   }

   handleSend = () => {
      const { name, email, subject, message } = this.state
      if (name === '' || email === '' || subject === '' || message === '') {
         alert('Please complete the form!')
         return
      } else {
         let templateParams = {
            name: name,
            email: email,
            to_name: 'Rick and Peter',
            subject: subject,
            message: message,
         }

         console.log(
            process.env.REACT_APP_EMAIL_SERVICE,
            process.env.REACT_APP_EMAIL_TEMPLATE,
            process.env.REACT_APP_EMAIL_USER
         )

         // emailjs.send(
         //     'my_dev_gmail',
         //     'template_j6ztv0i',
         //     templateParams,
         //     'user_e2SBprNH4w0Ma1Ze0RS4r'
         // )

         // this.handleOpen();
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

   handleSubmit = (event) => {
      event.preventDefault()
      this.handleSend()
   }

   handleOpen = () => {
      this.setState({
         open: true,
      })
   }

   handleClose = () => {
      this.setState({
         open: false,
      })
      this.resetForm()
   }

   render() {
      const { classes } = this.props

      return (
         <div>
            <Card width='sm'>
               <Typography component='h1' variant='h5'>
                  Contact Us
               </Typography>
               <form
                  className={classes.form}
                  spacing={1}
                  onSubmit={this.handleSubmit.bind(this)}>
                  <TextField
                     variant='outlined'
                     margin='normal'
                     required
                     fullWidth
                     id='name'
                     label='Name'
                     name='name'
                     value={this.state.name}
                     onChange={this.handleChange.bind(this, 'name')}
                     autoFocus
                  />
                  <TextField
                     variant='outlined'
                     margin='normal'
                     required
                     fullWidth
                     id='email'
                     label='Email'
                     name='email'
                     autoComplete='email'
                     value={this.state.email}
                     onChange={this.handleChange.bind(this, 'email')}
                  />
                  <TextField
                     variant='outlined'
                     margin='normal'
                     required
                     fullWidth
                     id='subject'
                     label='Subject'
                     name='subject'
                     value={this.state.subject}
                     onChange={this.handleChange.bind(this, 'subject')}
                  />
                  <TextField
                     variant='outlined'
                     margin='normal'
                     required
                     fullWidth
                     id='message'
                     label='Message'
                     name='message'
                     value={this.state.message}
                     onChange={this.handleChange.bind(this, 'message')}
                     multiline
                     rows={6}
                  />
                  <Divider className={classes.divider} />
                  <Grid container spacing={2} justifyContent='flex-end'>
                     <Grid item fullWidth>
                        <Button
                           type='reset'
                           fullWidth
                           variant='outlined'
                           color='secondary'
                           spacing={2}
                           onClick={this.resetForm}>
                           Cancel
                        </Button>
                     </Grid>
                     <Grid item fullWidth>
                        <Button
                           type='submit'
                           fullWidth
                           variant='contained'
                           color='primary'
                           spacing={2}
                           onClick={this.handleOpen}>
                           Send
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </Card>
            <Modal
               className={classes.modal}
               open={this.state.open}
               onClose={this.handleClose}
               closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
                  timeout: 500,
               }}>
               <Fade in={this.state.open}>
                  <Paper>
                     <Grid>
                        <Grid item>
                           <Typography variant='h4' align='center'>
                              Message sent!
                           </Typography>
                           <Divider className={classes.divider} />
                           <Typography>
                              We appreciate your interest. We will get back to
                              you as soon as we can!
                           </Typography>
                        </Grid>
                     </Grid>
                  </Paper>
               </Fade>
            </Modal>
         </div>
      )
   }
}

Contact.propTypes = {
   classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Contact)
