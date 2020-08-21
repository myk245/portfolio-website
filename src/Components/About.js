import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

function About() {
   return (
      <div>
         <Paper
            elevation={1}
            style={{ padding: 40, margin: 40, backgroundColor: "#fff0f0" }}
            variant="outlined"
            >
            {/* blue: #f0f8ff */}
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
               <Grid item xs={10} zeroMinWidth>
                  <br></br>
                  <br></br>
                  <Typography id="about-section">
                     Hi, my name's Cindy! I was born in Hong Kong and raised in Queens. 
                     <br></br>
                     <br></br>
                     I am a Fullstack Software Engineer based in NYC who is interested in creating social change and making a difference through 
                     innovative, powerful technologies. I am inspired by clean, well-designed, and intuitive applications. 
                     <br></br>
                     <br></br>
                     I became interested in the creative exploration of good design and the potential of Software Engineering to reach a global audience, 
                     so I started learning to code on my own. I love the challenge of building something from scratch and seeing it come to life on my laptop 
                     screen. I enrolled in Flatiron School in order to immerse myself in the world of Software Engineering, meet people who 
                     are passionate about coding, collaborate on exciting projects, and learn from some brilliant developers. 
                     <br></br>
                     <br></br>
                     In my downtime, I enjoy reading, eating, interior design, talking to my plant babies, watching puppy and baby videos, 
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