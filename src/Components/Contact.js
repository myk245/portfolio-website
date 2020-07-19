import React from 'react';
import { TextField, Paper, Button, Icon, IconButton, Snackbar } from '@material-ui/core';
import * as emailjs from 'emailjs-com';

class Contact extends React.Component {

   state = {
      name: "", 
      email: "", 
      message: "", 
      snackbaropen: false, 
      snackbarmsg: ''
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   resetForm = () => {
      this.setState({
         name: "",
         email: "",
         message: ""
      })
   }

   snackbarClose = () => {
      this.setState({
         snackbaropen: false
      })
   }

   handleSubmit = (event) => {
      event.preventDefault();
  
      const templateParams = {
         from_name: this.state.name + "(" + this.state.email + ")",
         to_name: "Cindy",
         message_html: this.state.message
      }

      emailjs.send("cindy_s_email", "template_TEAD2c1g", templateParams, "user_7sPawwVPHo7YF23EhIM7I")
         
         .then(() => {
            this.setState({
               snackbaropen: true, 
               snackbarmsg: "Thank you for your message. I'll get back to you as soon as I can."
            })
         },
            () => {
               this.setState({
                  snackbaropen: true,
                  snackbarmsg: "Message failed to send. Please try again."
               })
            }
      )     
         
         .then(this.resetForm())
   }

   render() {  
      return (
         <div>
            <Snackbar
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',}}
               open={this.state.snackbaropen}
               autoHideDuration={3000}
               onClose={this.snackbarClose}
               message={this.state.snackbarmsg}
               action={
                  <IconButton
                     key="close"
                     aria-label="Close"
                     color="inherit"
                     onClick={this.snackbarClose}
                  >
                  x
                  </IconButton>
               }
            >     
            </Snackbar>
            <br></br>
            <br></br>
            <br></br>
            <Paper class="paper-section" elevation={3} variant="outlined">
               <div>
                  <h1 class="page-title">Get In Touch</h1>
                  <h6 class="page-subtitle">Use the below contact form to send me any questions or comments. Or feel free to just say hi!</h6>
               </div>
               <form>
                  <TextField
                     label="Name"
                     name="name"
                     value={this.state.name}
                     multiline
                     rows={1}
                     variant="outlined"
                     size="small"
                     id="name-field"
                     onChange={this.handleChange}
                  />
                  <br></br>
                  <TextField
                     label="Email Address"
                     name="email"
                     value={this.state.email}
                     multiline
                     rows={1}
                     variant="outlined"
                     size="small"
                     id="email-field"
                     onChange={this.handleChange}
                  />
                  <br></br>
                  <TextField
                     label="Message"
                     name="message"
                     value={this.state.message}
                     multiline
                     rows={5}
                     variant="outlined"
                     size="small"
                     id="message-field"
                     onChange={this.handleChange}
                  />

                  <br></br>
                  <br></br>
                  <Button variant="contained" color="primary" size="small" endIcon={<Icon>send</Icon>} onClick={this.handleSubmit}>Send Message</Button>
 
               </form>
            </Paper>
            <br></br>
            <br></br>
            <br></br>
         </div>
      )
   }
}

export default Contact; 