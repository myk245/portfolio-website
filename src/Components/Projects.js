import React from 'react';
import { Grid, Paper, Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

function Projects() {
   
   return (
      <div>
         <br></br>
         <br></br>
            <h1 class="page-title">My Projects</h1>
            <h6 class="page-subtitle">Below is a selection of my projects. Any feedback is welcome!</h6>
         <Paper class="paper-section" elevation={3} variant="outlined">
            <br></br>
            <br></br>
            <div id="grid-div">
               <Grid container spacing={6} id="grid-container">
                  
                  <Grid item
                     xs={12} sm={6} md={4}
                     className="grid-card"
                     key="virago">
                     <Card class="project-card">
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
                                 A centralized resource and community support group for mental health care.
                              </Typography>
                        </CardContent>
                        <Typography><a href="https://github.com/myk245/virago-frontend" target="_blank" class="plain-link">GitHub</a></Typography>
                        <Typography><a href="https://youtu.be/LnOqoD8Wov8" target="_blank" class="plain-link">Demo</a></Typography>
                     </Card>
                  </Grid>

                  <Grid
                     item
                     xs={12} sm={6} md={4}
                     className="grid-card"
                  >
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

                  <Grid
                     item
                     xs={12} sm={6} md={4}
                     className="grid-card"
                  >
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
            </div>
            <br></br>
            <br></br>
            <Switch>
               <Route path="/projects/:id" />
            </Switch>
         </Paper>
         <br></br>
         <br></br>
      </div>
   )
}

export default Projects; 