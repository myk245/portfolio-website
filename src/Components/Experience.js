import React from 'react'; 
import { Paper, Card } from '@material-ui/core'; 

function Experience() {
   return (
      <div>
         <br></br>
         <br></br>
         <h1 className="page-title">Experience</h1>
         <Paper className="paper-section" elevation={3} variant="outlined">
            <br></br>
            <br></br>
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
                  <ul>
                     <li>Compiled sales reports and presentation materials to drive foreign sales</li>
                     <li>Pitched serial excerpts to targeted publications and contributed $12,000/year in serial sales</li>
                  </ul>
               </div>
            </Card>
            <br></br>
            <br></br>
            <Card className="experience-card">
               <div className="experience-left">
                  <p className="company-name">The Aldan Troy Group</p>
                  <p>Merchandising Assistant, Bergdorf Goodman</p>
               </div>
               <div className="experience-right">
                  <p>New York, NY</p>
                  <p>October 2016 - April 2017</p>
               </div>
               <div className="experience-main">
                  <br></br>
                  <ul>
                     <li>Coordinated merchandise allocation and maintained price changes in company database</li>
                     <li>Coded purchase orders and compiled weekly sales reports</li>
                  </ul>
               </div>
            </Card>
            <br></br>
            <br></br>
            <Card className="experience-card">
               <div className="experience-left">
                  <p className="company-name">Oxford University Press</p>
                  <p>Editorial Intern</p>
               </div>
               <div className="experience-right">
                  <p>New York, NY</p>
                  <p>October 2015 - May 2016</p>
               </div>
               <div className="experience-main">
                  <br></br>
                  <br></br>
                  <ul>
                     <li>Edited manuscript drafts and prepared manuscripts for handover to production</li>
                     <li>Assisted with preparation of budgets and proposals</li>
                  </ul>
               </div>
            </Card>
            <br></br>
            <br></br>
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Experience; 