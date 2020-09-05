import React from 'react';
import { Paper, Grid, Card, CardMedia, CardContent, Typography, Divider, emphasize } from '@material-ui/core'; 

function Blog() {
   return (
      <div>
         <br></br>
         <br></br>
            <p className="page-title">Blog Posts</p>
            <p className="page-subtitle">Please find a curation of some of my blog posts below.</p>
         <Paper
            elevation={1}
            style={{ padding: 40, margin: 40, backgroundColor: "#f4f4f4" }}
            variant="outlined"
            className="paper-section"
            >
            <br></br>
            <Card className="project-card">
               <h2>How To Approach Algorithms</h2>
               <p>Understanding and Breaking Down Algorithmic Problems</p>
               <br></br>
               <CardMedia
                  component="img"
                  alt="JavaScript Testing"
                  height="300"
                  image="img/algorithms.jpg"
               >
               </CardMedia>
               <CardContent>
                  <p>A short and helpful guide on how to approach algorithmic problems.</p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/how-to-approach-algorithms-5c45b91ec6b8?source=friends_link&sk=59bf9af3318aa32b1e61c92b6907fc8a">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Testing in JavaScript</h2>
               <p>How Writing Tests for Your Code Can Help Improve Your Code</p>
               <br></br>
               <CardMedia
                  component="img"
                  alt="JavaScript Testing"
                  height="300"
                  image="img/testing.jpg"
               >
               </CardMedia>
               <CardContent>
                  <p>Testing is an important part of writing clean, efficient code. While testing might seem intimidating and time-consuming, understanding the basics will help us to start implementing tests, resulting in a more professional and efficient end product.</p>
                  <br></br>
                  <p>
                     <em>Published on The Startup</em>
                  </p>
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
                  image="img/css-flexbox.jpeg"
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
            <br></br>
         <br></br>
         <Card className="project-card">
            <h2>Recursive Functions</h2>
            <p>What is recursion and why should we care?</p>
            <br></br>
            <CardMedia
               component="img"
               alt="CSS Flexbox"
               height="300"
               image="img/recursion.jpeg"
            >
            </CardMedia>
            <CardContent>
               <p>
                  A short guide to recursive functions and why they matter in programming.
               </p>
               <br></br>   
               <p>
                  <em>Published on Better Programming</em>   
               </p>
               <br></br>
               <Divider></Divider>
               <br></br>
               <a target="_blank"
                  rel="noopener noreferrer"
                  className="plain-link"
                  href="https://medium.com/better-programming/recursive-functions-2b5ce4610c81?source=friends_link&sk=957a64d81d97bdb18992ff953eed16ad">Read Article → </a>
            </CardContent>
         </Card>
         <br></br>
         <Card className="project-card">
            <h2>Basic Routing in JavaScript</h2>
            <p>Routing Using Express and EJS</p>
            <br></br>
               <CardMedia
                  component="img"
                  alt="Routing"
                  height="300"
                  image="img/routing.png"
               >
               </CardMedia>
               <CardContent>
                  <p>
                     Learn how to implement basic routing in your JavaScript SPA using Express server and EJS.
                  </p>
                  <br></br>
                  <p>
                     <em>Published on The Startup</em>
                  </p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/swlh/basic-routing-in-javascript-fb3e51a3a57b?source=friends_link&sk=2c72eed47ff98da26e726d67ef30a496">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Deploying Your React App to Heroku</h2>
               <p>How to Successfully Deploy Your Production Build create-react-app to Heroku</p>
               <br></br>
               <CardMedia
                  component="img"
                  alt="Heroku Deployment"
                  height="300"
                  image="img/heroku.png"
               >
               </CardMedia>
               <CardContent>
                  <p>
                     So you’ve spent hours building your React app and finally have something you’re proud of and are ready to share — now what? Check out this step-by-step guide on how to configure your production build create-react-app project for deployment to Heroku.
                  </p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/deploying-your-react-app-to-heroku-f8969d1539c5?source=friends_link&sk=c884c73d7303ec09e9cd85243b5af3c1">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Incorporating EmailJS into Your Application</h2>
               <p>Sending Emails Using Only Client-Side Technology</p>
               <br></br>
               <CardMedia
                  component="img"
                  alt="EmailJS Service"
                  height="300"
                  image="img/client-email.png"
               >
               </CardMedia>
               <CardContent>
                  <p>
                     Any good portfolio website has to allow for potential employers and clients to get in touch. 
                     While you can just include your email address or a mailto link on your website, a contact form 
                     is an easy way to encourage communication as it allows the person who wants to reach out to do 
                     so easily. EmailJS is a tool that allows you to send emails directly using JavaScript, without 
                     any backend code involved. Check out this blog post for a look in to how to incorporate EmailJS into your own application!
                  </p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/incorporating-emailjs-into-your-application-c6aa10287bfa?source=friends_link&sk=9d2553a798c0f08b2ac9b4a8445ee3ec">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>The Use of AI in Mental Health Care</h2>
               <br></br>
               <CardMedia
                  component="img"
                  alt="AI in Mental Health Care"
                  height="300"
                  image="img/ai-mental.gif"
               >
               </CardMedia>
               <CardContent>
                  <p>
                     A thought-provoking dive into the use of AI in mental health care.
                  </p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/the-use-of-ai-in-mental-health-care-98fed59ed96e?source=friends_link&sk=f4b1f5b3d52312fb4eaf034d971da2c1">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Accessibility & Inclusion on the Web</h2>
               <p>It's All of Our Responsibility</p>
               <br></br>
               <CardMedia
                  component="img"
                  alt="Accessibility"
                  height="300"
                  image="img/accessibility.gif"
               >
               </CardMedia>
               <CardContent>
                  <p>
                     Web accessibility needs to be a core focus in the world of programming. 
                     In this article, I explore some ways in which we can start to become 
                     more thoughtful about developing with web accessibility and inclusion 
                     at the forefront of our minds.
                  </p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/accessibility-inclusion-on-the-web-its-all-of-our-responsibility-e24c5d1ada72?source=friends_link&sk=3d7ba39fe7e7881f21e3e3db28701878">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>The Effects of Technology on the Criminal Justice System</h2>
               <p>The Use of AI in Criminal Justice</p>
               <br></br>
               <CardMedia
                  component="img"
                  alt="AI and Criminal Justice"
                  height="300"
                  image="img/ai-criminal.gif"
               >
               </CardMedia>
               <CardContent>
                  <p>
                     In this article, I explore the ways in which new and emerging technology plays 
                     a major role in the application of criminal justice and legal policy. I also 
                     explore the biases and issues surrounding these technologies and how they affect 
                     real people. 
                  </p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/the-very-real-effects-of-technology-on-the-criminal-justice-system-3e7a25b3b13b?source=friends_link&sk=9f85f8a68a142a403f85975c86a9db21">Read Article → </a>
               </CardContent>
            </Card>

         </Paper>
      </div>
   ) 
}

export default Blog; 
