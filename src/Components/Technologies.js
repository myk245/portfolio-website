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
               <span class="fab fa-js-square fa-10x" style={{ color: "rgb(203, 221, 255)"}}></span>
               <p class="tech-p">JavaScript</p>
               <br></br>
               <span class="fab fa-react fa-10x fa-spin" style={{ color: "rgb(203, 221, 255)" }}></span>
               <p class="tech-p">React</p>
               <br></br>
               <span class="devicon-ruby-plain"></span>
               <p class="tech-p">Ruby</p>
               <br></br>
               <span class="devicon-rails-plain"></span>
               <p class="tech-p">Rails</p>
               <br></br>
               <br></br>
               <h3>I'm always trying to learn, so please check back in a bit to see what technologies I learn next!</h3>
            </div>
         </Paper>  
         <br></br>
         <br></br>
      </div>
   )
}

export default Icons; 