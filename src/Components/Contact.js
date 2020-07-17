import React from 'react';
import { TextField, Paper, Button, Icon } from '@material-ui/core';
import { EmailJSResponseStatus } from 'emailjs-com';

class Contact extends React.Component {

   state = {
      name: "", 
      email: "", 
      message: ""
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault();
  
      const templateParams = {
         from_name: this.state.name + "(" + this.state.email + ")", 
         to_name: Cindy, 
         message_html: this.state.message 
      }

      emailjs.send("gmail", "cindykei92", templateParams, {template_TEAD2c1g})

   resetForm = () => {
      this.setState({
         name: "",
         email: "",
         subject: "",
         message: ""
      })
   }

   render() {  
      return (
         <div>
            <br></br>
            <br></br>
            <br></br>
            <Paper id="contact-form" elevation={3} variant="outlined">
               <form>
                  <TextField
                     label="Name"
                     type="text"
                     name="name"
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
                     type="email"
                     name="email"
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
                     multiline
                     rows={5}
                     variant="outlined"
                     size="small"
                     id="message-field"
                     onChange={this.handleChange}
                  />

                  <br></br>
                  <br></br>
                  <Button variant="contained" color="primary" size="small" endIcon={<Icon>send</Icon>}>Send Message</Button>
 
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