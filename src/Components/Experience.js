import React from 'react'; 
import { Paper, Card, Divider } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

function Experience() {
   return (
      <div>
         <br></br>
         <br></br>
         <h1 className="page-title">Experience</h1>
         <Paper
            elevation={1}
            style={{ padding: 40, margin: 40, backgroundColor: "#f4f4f4" }}
            variant="outlined"
            className="paper-section"
         >
            <Card className="project-card">
               <p id="summary">
               Fullstack Software Engineer with a proven track record in driving sales 
               and delivering results. I am looking forward to joining an innovative, 
               energetic company where I can utilize my strong problem solving, communication, 
               and collaboration skills in order to help create thoughtful, intelligent solutions 
               that make an impact on people's lives.
               </p>
               <Divider />
               <br></br>
                  <p>Education</p>
                  <br></br>
               <div className="education-div">
                  <Card className="education-card">
                     <div className="experience-left">
                        <p className="company-name">Flatiron School</p>
                        <p>January 2020 - May 2020</p>
                        <p>New York, NY</p>
                        <p>Immersive Full Stack Web Development</p>
                     </div>
                  </Card>
                  <br></br>
                  <Card className="education-card">
                     <div className="experience-left">
                        <p className="company-name">New York University</p>
                        <p>August 2010 - May 2014</p>
                        <p>Bachelor of Arts, Linguistic Anthropology</p>
                        <p>Summa Cum Laude, Phi Beta Kappa	</p>
                     </div>
                  </Card>
                  </div>
                  <br></br>
                  <br></br>
                  <Divider />
                  <br></br>
                  <p>Work Experience</p>
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
                           <li>Pitched serial excerpts to targeted publications; contributed $12,000/year in serial sales</li>
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
                           <li>Edited manuscript drafts and prepared manuscripts for handover to  production</li>
                           <li>Assisted with preparation of budgets and proposals</li>
                        </ul>
                     </div>
                  </Card>
                  <br></br>
                  <br></br>
                  <Link to="resume.pdf" target="_blank" download id="button">Download Resume</Link>
                  <br></br>
                  <br></br>
            </Card>
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Experience; 