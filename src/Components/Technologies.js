import React from 'react';
import { Paper, Divider } from '@material-ui/core';
 
function Icons() {
   return (
      <div>
         <br></br>
         <br></br>
         <Paper class="paper-section" elevation={3} variant="outlined">
            <h1 class="page-title">Technologies</h1>
            <br></br>
            <span class="page-subtitle">Below are the technologies that I am experienced in.</span>
            <br></br>
            <br></br>
            <Divider />
            <br></br>
            <br></br>
            <div id="tech-div">
               <div className="row">
                  <div>
                     <span className="fab fa-js-square flex-item column"></span>
                     <p>JavaScript</p>
                  </div>
                  <br></br>
                  <div>
                     <span className="fab fa-react flex-item column"></span>
                     <p>React</p>
                  </div>
                  <br></br>
               </div>

               <div className="row">
                  <div>
                     <span className="devicon-ruby-plain column"></span>
                     <p>Ruby</p>
                  </div>
                  <br></br>
                  <div>
                     <span className="devicon-rails-plain column"></span>
                     <p>Rails</p>
                  </div>
                  <br></br>
               </div>

               <div className="row">
                  <div>
                     <span className="devicon-postgresql-plain column"></span>
                     <p>PostgreSQL</p>
                  </div>
                  <br></br>
                  <div>
                     <span className="devicon-css3-plain column"></span>
                     <p>CSS</p>
                  </div>
                  <br></br>
               </div>

               <div className="row">
                  <div>
                     <span className="devicon-html5-plain column"></span>
                     <p>HTML</p>
                  </div>
               </div>
            </div>
            
            <br></br>
            <br></br>
            <Divider />
            <br></br>
            <br></br>
            <p>I'm always trying to learn, so please check back in a bit to see what technologies I learn next!</p>
            <br></br>
         </Paper>  
         <br></br>
         <br></br>
      </div>
   )
}

export default Icons; 