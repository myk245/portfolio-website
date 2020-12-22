import React from 'react'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Divider } from '@material-ui/core';

function Icons() {
   return (
      <div>
         <Divider />
         <br></br>
         <a href="https://www.linkedin.com/in/cindy-kei/" target="_blank" rel="noopener noreferrer" className="icons-bar">
            <LinkedInIcon fontSize="large" className="icon-bar-icon"/>
         </a>
         <a href="https://github.com/myk245" target="_blank" rel="noopener noreferrer" className="icons-bar">
            <GitHubIcon fontSize="large"
               className="icon-bar-icon"/>
         </a>
         <a href="https://twitter.com/KeiCindy" target="_blank" rel="noopener noreferrer" className="icons-bar">
            <TwitterIcon fontSize="large" color="black"
               className="icon-bar-icon"/>
         </a>
         <a href="https://medium.com/@cindylouwho92" target="_blank" rel="noopener noreferrer" className="icons-bar">
            <i className="fab fa-medium fa-3x icon-bar-icon"></i>
         </a>
         <br></br>
         <p id="connect-with">Let's connect!</p>
      </div>
   )
}

export default Icons; 