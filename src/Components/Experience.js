import React from 'react'; 
import { Paper, Card } from '@material-ui/core'; 

function Experience() {
   return (
      <div>
         <br></br>
         <br></br>
         <h1 className="page-title">Experience</h1>
         <Paper className="paper-section" elevation={3} variant="outlined">
            <Card className="experience-card">
               <div className="experience-left">
                  <p className="company-name">Simon & Schuster</p>
                  <p>Subsidiary Rights Associate</p>
               </div>
               <div className="experience-right">
                  <p>New York, NY</p>
                  <p>April 2017 - December 2019</p>
               </div>
               <div className="experience-main">
                  <br></br>
                  <br></br>
                  <br></br>
                  <ul>
                     <li>Compiled sales reports and presentation materials to drive foreign sales</li>
                     <li>Crafted and pitched serial excerpts to targeted publications and contributed $12,000/year in serial sales</li>
                  </ul>
               </div>
            </Card>
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Experience; 