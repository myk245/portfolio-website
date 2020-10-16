import React from 'react';
import { Paper, Divider, Card } from '@material-ui/core';
 
function Icons() {
   return (
      <div>
         <br></br>
         <br></br>
         <h1 class="page-title">Technologies</h1>
         <br></br>
         <span class="page-subtitle">Below are the technologies that I am experienced in.</span>
         <Paper
            elevation={1}
            style={{ padding: 40, margin: 40, backgroundColor: "#f4f4f4" }}
            variant="outlined"
            className="paper-section"
         >
            <br></br>
            <br></br>
            <Card className="project-card">
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
                     <span className="devicon-html5-plain column"></span>
                     <p>HTML</p>
                  </div>
                  <br></br>
               </div>

               <div className="row">
                  <div>
                     <span className="devicon-css3-plain column"></span>
                     <p>CSS</p>
                  </div>
                  <br></br>
                  <div>
                     <span className="devicon-sass-original column"></span>
                     <p>Sass</p>
                  </div>
               </div>
               
               <div className="row">
                  <div>
                     <span className="devicon-express-original column"></span>
                     <p>Express</p>
                  </div>
                  <div>
                     <span className="devicon-nodejs-plain column"></span>
                     <p>Node.js</p>
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
            </Card>
         </Paper>  
         <br></br>
         <br></br>
      </div>
   )
}

export default Icons; 