import React from 'react'; 
import { Paper, Card } from '@material-ui/core'; 

function Experience() {
   return (
      <div>
         <br></br>
         <br></br>
         <h1 class="page-title">Experience</h1>
         <Paper class="paper-section" elevation={3} variant="outlined">
            <Card class="experience-card">
               <div>
                  <p class="company-name">Simon & Schuster</p>
                  <p>Subsidiary Rights Associate</p>
               </div>
            </Card>
            {/* <img
               src="experience.png"
               alt="resume"
               id="resume"
            /> */}
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Experience; 