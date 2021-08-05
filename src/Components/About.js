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
                     Hi, my name is Cindy and my pronouns are She/Her.
                     <br></br>
                     <br></br>
                     I'm a Full Stack Software Engineer based in NYC who loves being able to create innovative solutions that leave a positive impact on the world. With previous experience in e-commerce and customer service, I have a proven track record in driving sales and delivering results. I love being a Software Engineer because it gives me the unique opportunity to use my technical, critical thinking, and people skills to make an impact on the lives of people from all over the world.
                     <br></br>
                     <br></br>
                     I am well-versed in JavaScript, React, Ruby, and Rails and am always eager to learn new things in order to keep growing as a Software Engineer. I place a special emphasis on delivering the best user experience, in turn improving customer retention and driving company growth. I am looking to join an innovative and dynamic team where I can utilize my strong problem-solving, communication, collaboration, and project-management skills in order to help create thoughtful, intelligent solutions that will help ensure the growth and continued success of the company.
                     <br></br>
                     <br></br>
                     When I am not coding or debugging, I enjoy traveling, cuddling all the kitties and puppies, being a plant mom, browsing interior design pages, cooking (and eating!), watching true crime documentaries, reading, and experiencing the diverse languages, cultures, and cuisines of the world.
                     <br></br>
                     <br></br>
                     <b><i>If you'd like to connect, please feel free to leave me a message using the "Get In Touch" option in the dropdown menu (top right corner). You can also connect with me on LinkedIn or reach me via email at myk245@nyu.edu. I'd love to hear from you.</i></b>
                  </Typography> 
               </Grid>
            </Grid>
         </Paper> 
      </div>
   )
}

export default About; 