import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

function About() {
   return (
      <div>
         <Paper
            elevation={0}
            style={{ padding: 40, margin: 40, backgroundColor: '#fff0f0' }}
            variant='outlined'
            >
            {/* blue: #f0f8ff */}
            <Grid
               container
               justify="center"
               alignItems="center"
            >
               <Grid item xs zeroMinWidth>
                  <Typography class='about-section'>
                     Hello there, my name is Cindy Kei. I was born in Hong Kong and raised in New York City (QGTM!). 
                     <br></br>
                     <br></br>
                     I am a Fullstack Software Engineer based in NYC, but I'm very open to relocating. I have a thing for clean, 
                     well-designed, and intuitive websites and applications. 
                     <br></br>
                     <br></br>
                     Prior to starting my journey into Software Engineering, I enjoyed a career in Publishing, where I utilized my strong organizational, 
                     analytical thinking, and collaboration skills to drive sales in international and domestic book rights. During this time, I became 
                     interested in the creative exploration of good design and the potential of Software Engineering to reach a global audience, so I 
                     started learning to code on my own. I loved the challenge of building something from scratch and seeing it come to life on my laptop 
                     screen. I decided to enroll in Flatiron School in order to immerse myself in the world of Software Engineering, meet new people who 
                     were starting on the same journey as me, collaborate on exciting projects, and learn from some of the very best developers. 
                     <br></br>
                     <br></br>
                     In my downtime, I enjoy reading, writing, traveling, and learning about and experiencing the diverse languages, cultures, and cuisines of the world. 
                     <br></br>
                     <br></br>
                     <i>I'd love to hear from you, so please feel free to contact me!</i>
                  </Typography>
                   
                   
               </Grid>
            </Grid>
         </Paper> 
      </div>
   )
}

export default About; 