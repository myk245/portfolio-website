import React from 'react';
import { Paper } from '@material-ui/core';

function Projects() {
   return (
      <div>
         <br></br>
         <br></br>
         <Paper class="paper-section" elevation={3} variant="outlined">
            <div>
               <h1 class="page-title">My Projects</h1>
               <h6 class="page-subtitle">Click on a project below to see more about that project.</h6>
            </div>
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Projects; 