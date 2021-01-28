import React from 'react'; 
import { Card, Divider } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

function Experience() {
   return (
   <div>
      <br></br>
      <br></br>
      <h1 className="page-title">Experience</h1>
         <Card className="project-card">
            <p id="summary">
            Highly motivated, growth-minded, and detail-oriented Fullstack Software Engineer. Experience in e-commerce and customer service with a proven track record in driving sales and cross-team collaboration. Driven by the opportunity to use my technical and people skills to affect positive social impact and build the best user experience.
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
                        <li>Pitched serial opportunities to targeted publications, contributing $12,000/year in serial sales</li>
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
                        <li>Coordinated merchandise allocation and pricing changes</li>
                        <li>Coded purchase orders into merchandising system and compiled weekly sales reports</li>
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
                        <li>Prepared budgets and book proposals</li>
                     </ul>
                  </div>
               </Card>
               <br></br>
               <br></br>
               <Link to="resume.pdf" target="_blank" download id="button">Download Resume</Link>
               <br></br>
               <br></br>
         </Card>
      <br></br>
      <br></br>
   </div>
   )
}

export default Experience; 