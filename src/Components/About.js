import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

function About() {
   return (
      <div>
         <Paper
            elevation={1}
            style={{ padding: 40, margin: 60, backgroundColor: "#F7F7F8"}}
            variant="outlined"
            >
            <Grid
               container
               justify="center"
               alignItems="center"
            >
               <Grid item xs={10} id="main-image-container"> 
                  <img
                     src="cindy-kei.png"
                     alt="Cindy Kei"
                     id="main-image"
                  />
               </Grid>
               <Grid item xs={11} zeroMinWidth>
                  <br></br>
                  <br></br>
                  <Typography id="about-section">
                     Hi, I'm Cindy. I am a Software Engineer based in NYC.
                     <br></br>
                     <br></br>
                     I am a highly motivated, growth-minded, and detail-oriented Fullstack Developer who is passionate about creating social change and making a difference through innovative, powerful technologies. I have experience in e-commerce and customer service and have a proven track record in driving sales and delivering results. I am driven by the opportunity to use my technical and people skills to make an impact on peoples' lives and to deliver the best user experience. I am looking to join a forward-thinking company where I can utilize my strong problem solving, communication, collaboration, and critical thinking skills in order to help create thoughtful, intelligent solutions that make an impact on people's lives.
                     <br></br>
                     <br></br>
                     I became interested in the creative exploration of web design and the potential of Software Engineering to reach a global audience, 
                     so I started learning to code on my own. I love the challenge of building something from scratch and seeing it come to life on my laptop 
                     screen. I enrolled in Flatiron School in order to immerse myself in the world of Software Engineering, meet people who 
                     are passionate about coding, collaborate on exciting projects, and learn from brilliant developers. 
                     <br></br>
                     <br></br>
                     In my downtime, I enjoy reading, eating (and cooking), looking at interior design trends, talking to my plants,
                     traveling, and experiencing the diverse languages, cultures, and cuisines of the world. 
                     <br></br>
                     <br></br>
                     <b><i>I'd love to hear from you, so please feel free to reach out!</i></b>
                  </Typography> 
               </Grid>
            </Grid>
         </Paper> 
      </div>
   )
}

export default About; 