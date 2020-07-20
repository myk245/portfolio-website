import React from 'react';
import { Grid, Paper, Card, CardContent, CardMedia, Typography} from '@material-ui/core';

function Projects() {
   return (
      <div>
         <br></br>
         <br></br>
         <Paper class="paper-section" elevation={3} variant="outlined">
            <div>
               <h1 class="page-title">My Projects</h1>
               <h6 class="page-subtitle">Click on a project below to view further details.</h6>
            </div>
            <Grid container spacing={20}>
               <Grid item md={10}>
                  <Card class="project-card">
                        <Typography gutterBottom variant="h5" component="h2">
                           Virago
                        </Typography>
                        <CardMedia
                           component="img"
                           alt="A Mental Health Care App"
                           height="140"
                           image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"
                           title="Virago"
                        />
                        <CardContent>
                           <Typography variant="body2" color="textSecondary" component="p">
                              A centralized resource and community support group for mental health care.
                           </Typography>
                     </CardContent>
                     <Typography>More Details→ </Typography>
                  </Card>
               </Grid>
               <Grid item md={10}>
                  <Card class="project-card">
                     <Typography gutterBottom variant="h5" component="h2">
                        Virago
                     </Typography>
                     <CardMedia
                        component="img"
                        alt="A Mental Health Care App"
                        height="140"
                        image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"
                        title="Virago"
                     />
                     <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                           A centralized resource and community support group for mental health care.
                        </Typography>
                     </CardContent>
                     <Typography>More Details→ </Typography>
                  </Card>
               </Grid>
            </Grid>
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Projects; 