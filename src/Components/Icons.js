import React from 'react'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import { Divider } from '@material-ui/core';

function Icons() {
   return (
      <div>
         <Divider />
         <br></br>
         <a href="https://www.linkedin.com/in/cindy-kei/" target="_blank" class="icons-bar">
            <LinkedInIcon fontSize="large" />
         </a>
         <a href="https://github.com/myk245" target="_blank" class="icons-bar">
            <GitHubIcon fontSize="large" />
         </a>
         <a href="mailto:cindykei92@gmail.com" target="_blank" class="icons-bar">
            <EmailSharpIcon fontSize="large" color="black"/>
         </a>
      </div>
   )
}

export default Icons; 