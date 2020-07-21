import React from 'react';
import { Paper, Divider } from '@material-ui/core';
 
function Icons() {
   return (
      <div>
         <br></br>
         <br></br>
         <Paper class="paper-section" elevation={3} variant="outlined">
            <div id="tech-div">
               <h1 class="page-title">Technologies</h1>
               <span class="page-subtitle">Below are the technologies that I am experienced in.</span>
               <br></br>
               <br></br>
               <Divider />
               <br></br>
               <br></br>
               <span class="fab fa-js-square fa-10x"></span>
               <p class="tech-p">JavaScript</p>
               <br></br>
               <span class="fab fa-react fa-10x fa-spin"></span>
               <p class="tech-p">React</p>
               <br></br>
               <span class="devicon-ruby-plain"></span>
               <p class="tech-p">Ruby</p>
               <br></br>
               <span class="devicon-rails-plain"></span>
               <p class="tech-p">Rails</p>
               <br></br>
               <br></br>
               <h3>More To Come!</h3>
            </div>
         </Paper>  
         <br></br>
         <br></br>
      </div>
   )
}

export default Icons; 