import React from 'react';
import {Paper, Card, CardContent, CardMedia, Typography} from '@material-ui/core';

function Projects() {
   
   return (
      <div>
         <br></br>
         <br></br>
         <h1 className="page-title">Projects</h1>
         <br></br>
            <h6 className="page-subtitle">Below is a selection of my projects. Please feel free to contact me with any questions or comments.</h6>
         <Paper className="paper-section" elevation={3} variant="outlined">
            <br></br>
            <br></br>
            <div id="grid-div">
                     <Card className="project-card">
                           <Typography gutterBottom variant="h5" component="h2">
                              Virago
                           </Typography>
                           <CardMedia
                              component="img"
                              alt="A Mental Health Care App"
                              height="400"
                              image="Virago.png"
                              title="Virago"
                           />
                           <CardContent>
                              <Typography variant="body1" color="textPrimary" component="p">
                                 Virago is a centralized resource and community support group for mental health care. 
                              </Typography>
                        </CardContent>
                        <Typography><a href="https://github.com/myk245/virago-frontend" target="_blank" rel="noopener noreferrer" className="plain-link">GitHub</a></Typography>
                        <Typography><a href="https://youtu.be/LnOqoD8Wov8" target="_blank" rel="noopener noreferrer" className="plain-link">Demo</a></Typography>
                     </Card>
            </div>
            <br></br>
            <br></br>
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Projects; 