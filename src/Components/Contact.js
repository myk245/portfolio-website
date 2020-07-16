import React from 'react';
import { TextField, Paper, Button, Icon } from '@material-ui/core';

class Contact extends React.Component {

   state = {
      name: "", 
      email: "", 
      message: ""
   }

   handleChange = (event) => {
      this.setState({
         name: event.target.value
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
                     label="Email"
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
                  <Button variant="outlined" color="primary" size="small" endIcon={<Icon>send</Icon>}>Send Message</Button>
 
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