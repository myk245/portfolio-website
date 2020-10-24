import React from 'react';
import {Paper, Card, CardContent, CardMedia, Typography, Divider} from '@material-ui/core';

function Projects() {
   
   return (
      <div>
         <br></br>
         <br></br>
         <h1 className="page-title">Projects</h1>
         <br></br>
         <h6 className="page-subtitle">Below is a selection of my projects. Please feel free to contact me with any questions or comments.</h6>
         <div className="project-div">
         {/* <Paper
            elevation={1}
            style={{ padding: 40, margin: 40, backgroundColor: "#f4f4f4" }}
            variant="outlined"
            className="paper-section"
         > */}
            <br></br>
            <br></br>
            <div id="grid-div">
               <Card className="project-card">
                  <h2>Virago</h2>
                  <br></br>
                  <Divider />
                  <br></br>
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
                     <div className="text-box">
                     <br></br>
                     Going through a mental issue can be an overwhelming, scary, and isolating experience. Virago aims to change the way that we deal with mental health disorders by providing a safe, compassionate space for people to openly and honestly discuss mental health and to support others going through the same thing. Virago provides general mental health wellness tips as well as information on specific mental health disorders and provides a collection of helpful resources.
                     <br></br>
                     <br></br>
                     <span>Tech Stack: React, Rails, PostgreSQL, Active Record, Bootstrap, Heroku</span>
                     </div>
                  </CardContent>
                  <Divider/>
                  <Typography><a href="https://github.com/myk245/virago-frontend" target="_blank" rel="noopener noreferrer" className="plain-link">GitHub</a></Typography>
                  <Typography><a href="https://youtu.be/LnOqoD8Wov8" target="_blank" rel="noopener noreferrer" className="plain-link">Demo</a></Typography>
               </Card>
            </div>
            <br></br>
            <br></br>
            <div id="grid-div">
               <Card className="project-card">
                  <h2>
                     GitHub Search
                  </h2>
                  <br></br>
                  <Divider/>
                  <br></br>
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
                     <div className="text-box">
                     <br></br>
                     A simple and useful application that allows you to search for and view GitHub profiles by username and view basic information for the user such as website, location, and latest public repos.
                     <br></br>
                     <br></br>
                     <span>Tech Stack: JavaScript, Bootstrap, Bootswatch, GitHub API</span>
                     </div>
                  </CardContent>
                  <Divider/>
                  <Typography><a href="https://github.com/myk245/github-search" target="_blank" rel="noopener noreferrer" className="plain-link">GitHub</a></Typography>
                  <Typography><a href="https://myk245.github.io/github-search/" target="_blank" rel="noopener noreferrer" className="plain-link">Test Me Out</a></Typography>
               </Card>
            </div>
            <br></br>
            <br></br>
            <div id="grid-div">
               <Card className="project-card">
                  <h2>
                     WeatherApp
                  </h2>
                  <br></br>
                  <Divider />
                  <br></br>
                  <br></br>
                  <CardMedia
                     component="img"
                     alt="WeatherApp"
                     height="300"
                     className="blog-img"
                     image="weather-app.png"
                     title="WeatherApp"
                  />
                  <CardContent>
                     <div className="text-box">
                     <br></br>
                     A weather application built using JavaScript and the Weatherstack API. 
                     <br></br>
                     <br></br>
                     <span>Tech Stack: JavaScript, Bootstrap, Bootswatch, Weatherstack API</span>
                     </div>
                  </CardContent>
                  <Divider />
                  <Typography><a href="https://github.com/myk245/weather-app" target="_blank" rel="noopener noreferrer" className="plain-link">GitHub</a></Typography>
                  <Typography><a href="#" target="_blank" rel="noopener noreferrer" className="plain-link">Test Me Out Feature Coming Soon</a></Typography>
               </Card>
            </div>
         </div>
         {/* </Paper> */}
         <br></br>
         <br></br>
      </div>
   )
}

export default Projects; 