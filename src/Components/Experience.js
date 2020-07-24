import React from 'react'; 
import { Paper } from '@material-ui/core'; 

function Experience() {
   return (
      <div>
         <br></br>
         <br></br>
         <h1 class="page-title">Experience</h1>
         <Paper class="paper-section" elevation={3} variant="outlined">
            <img
               src="experience.png"
               alt="resume"
               height="600"
               width="800"
            />
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Experience; 