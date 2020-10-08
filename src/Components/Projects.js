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
         <Paper
            elevation={1}
            style={{ padding: 40, margin: 40, backgroundColor: "#f4f4f4" }}
            variant="outlined"
            className="paper-section"
         >
            <br></br>
            <br></br>
            <div id="grid-div">
               <Card className="project-card">
                  <Typography gutterBottom variant="h5" component="h2">
                     Virago
                  </Typography>
                  <br></br>
                  <CardMedia
                     component="img"
                     alt="A Mental Health Care App"
                     height="300"
                     className="blog-img"
                     image="Virago.png"
                     title="Virago"
                  />
                  <CardContent>
                     <Typography variant="body1" color="textPrimary" component="p">
                     Virago is a centralized resource and community support group for mental health care. 
                     </Typography>
                     <Typography variant="body1" color="textPrimary" component="p">
                     <br></br>
                     Going through a mental issue can be an overwhelming, scary, and isolating experience. People going through mental health issues often feel alone and unsure of who or where to turn to for help. Virago aims to change the way that we deal with mental health disorders by providing a safe, compassionate space for people to openly and honestly discuss mental health and to support others going through the same thing. Virago provides general mental health wellness tips as well as information on specific mental health disorders and provides a collection of helpful resources.
                     </Typography>
                  </CardContent>
                  <Typography><a href="https://github.com/myk245/virago-frontend" target="_blank" rel="noopener noreferrer" className="plain-link">GitHub</a></Typography>
                  <Typography><a href="https://youtu.be/LnOqoD8Wov8" target="_blank" rel="noopener noreferrer" className="plain-link">Demo</a></Typography>
               </Card>
            </div>
            <br></br>
            <br></br>
            <div id="grid-div">
               <Card className="project-card">
                  <Typography gutterBottom variant="h5" component="h2">
                     GitHub Search
                  </Typography>
                  <br></br>
                  <CardMedia
                     component="img"
                     alt="GitHub Search"
                     height="300"
                     className="blog-img"
                     image="github-search.png"
                     title="GitHub Search"
                  />
                  <CardContent>
                     <Typography variant="body1" color="textPrimary" component="p">
                     <br></br>
                     A simple and useful application that allows you to search for and view GitHub profiles by username and view basic information for the user such as website, location, and latest public repos.
                     </Typography>
                  </CardContent>
                  <Typography><a href="https://github.com/myk245/github-search" target="_blank" rel="noopener noreferrer" className="plain-link">GitHub</a></Typography>
                  <Typography><a href="https://myk245.github.io/github-search/" target="_blank" rel="noopener noreferrer" className="plain-link">Test Me Out</a></Typography>
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