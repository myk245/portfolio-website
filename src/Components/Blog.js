import React from 'react';
import { Paper, Grid, Card, CardMedia, CardContent, Typography, Divider } from '@material-ui/core'; 

function Blog() {
   return (
      <div>
         <br></br>
         <br></br>
            <p className="page-title">Blog Posts</p>
            <p className="page-subtitle">Please find a curation of some of my blog posts below.</p>
         <Paper
            elevation={1}
            style={{ padding: 40, margin: 40, backgroundColor: "#fff0f0" }}
            variant="outlined"
            className="paper-section"
            >
            <br></br>
            <Card className="project-card">
               <h2>Testing in JavaScript</h2>
               <p>How Writing Tests for Your Code Can Help Improve Your Code</p>
               <br></br>
               <CardMedia
                  component="img"
                  alt="JavaScript Testing"
                  height="300"
                  image="altumcode-oZ61KFUQsus-unsplash.jpg"
               >
               </CardMedia>
               <CardContent>
                  <p>Testing is an important part of writing clean, efficient code. While testing might seem intimidating and time-consuming, understanding the basics will help us to start implementing tests, resulting in a more professional and efficient end product.</p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/testing-in-javascript-aa32e51d55ec?source=friends_link&sk=2c4710a82a58bc4d6448d1a7133327a5">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>CSS Flexbox</h2>
               <p>A Guide to the Basics of Flexbox</p>
               <br></br>
               <CardMedia
                  component="img"
                  alt="CSS Flexbox"
                  height="300"
                  image="css-flexbox.jpeg"
               >
               </CardMedia>
               <CardContent>
                  <p>
                     CSS Flexbox is a powerful layout module that helps us easily create clean, organized, and responsive applications. Read this beginner's guide to understanding the basics of Flexbox. 
                  </p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/css-flexbox-1513e2e073ae?source=friends_link&sk=8546071c6b8247e625f9f60dbbe6a670">Read Article → </a>
               </CardContent>
            </Card>
         </Paper>
      </div>
   ) 
}

export default Blog; 
