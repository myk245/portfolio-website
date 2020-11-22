import React from 'react';
import { Card, CardMedia, CardContent, Divider } from '@material-ui/core';

function Blog() {
   return (
      <div>
         <br></br>
         <br></br>
         <p className="page-title">Blog Posts</p>
         <p className="page-subtitle">Please find a curation of my blog posts below.</p>
         <div className="project-div">
            <br></br>
            <Card className="project-card">
               <h2>Object-Oriented Programming</h2>
               <p>A Review of OOP and Its Core Principles</p>
               <br></br>
               <CardMedia
                  className="blog-img"
                  component="img"
                  alt="Object-Oriented Programming"
                  height="300"
                  image="img/oop.jpg"
               >
               </CardMedia>
               <CardContent>
                  <p>What is Object-Oriented Programming, why is it useful, and what are some OOP languages commonly used?</p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://cindylouwho92.medium.com/iobject-oriented-programming-6727702c6bbb">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>JavaScript's Array Reduce Method</h2>
               <br></br>
               <CardMedia
                  className="blog-img"
                  component="img"
                  alt="JavaScript's Array Reduce Method"
                  height="300"
                  image="img/reduce.jpg"
               >
               </CardMedia>
               <CardContent>
                  <p>While working on a coding assessment, I was challenged to find multiple ways to do the same task. In doing so, I employed JavaScript's reduce() method, an array method that is incredibly useful, yet simple. Here's a concise walk-through and explanation of the method.</p>
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
                     href="https://cindylouwho92.medium.com/javascripts-array-reduce-method-3bcea104a975?sk=7781a5b07ea9c3d8624d26bb12907866">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Configuring Your JavaScript Application</h2>
               <p>Setting Up Your App for Efficiency and Security</p>
               <br></br>
               <CardMedia
                  className="blog-img"
                  component="img"
                  alt="Configuration of Your JavaScript Application"
                  height="300"
                  image="img/config-app.png"
               >
               </CardMedia>
               <CardContent>
                  <p>A guide to configuring your JavaScript application to ensure security and performance.</p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://cindylouwho92.medium.com/configuring-your-javascript-app-d69cf1b01713?sk=91958e2d6936ab1c78c72b49ce934d56">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Approaching Technical Interviews</h2>
               <p>How to Prepare for and Succeed at Technical Interviews</p>
               <br></br>
               <CardMedia
                  className="blog-img"
                  component="img"
                  alt="Tech Interview"
                  height="300"
                  image="img/tech-interview.jpg"
               >
               </CardMedia>
               <CardContent>
                  <p>How to prepare for and succeed at technical interviews so you can land a Software Engineering job.</p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://cindylouwho92.medium.com/approaching-technical-interviews-6bf182994aa7?sk=b4fb5f33dcfdb47e0514501237c8d255">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Lessons from a Job Search</h2>
               <p>What I’ve Learned So Far in My Hunt for a Software Engineering Position</p>
               <br></br>
               <CardMedia
                  className="blog-img"
                  component="img"
                  alt="Job Search"
                  height="300"
                  image="img/job-search.jpg"
               >
               </CardMedia>
               <CardContent>
                  <p>Valuable tips to help you stay focused, motivated, and encouraged during your search for a job as a Software Engineer.</p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://cindylouwho92.medium.com/lessons-from-a-job-search-72272a8632fa?sk=2ca400253a5848275945f6c5eb3ab8d9">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Sass Me!</h2>
               <p>What is Sass and how how do we use it?</p>
               <br></br>
               <CardMedia
                  className="blog-img"
                  component="img"
                  alt="CSS Sass"
                  height="300"
                  image="img/sass.png"
               >
               </CardMedia>
               <CardContent>
                  <p>Sass is an incredibly useful tool that allows us to extend the power and functionality of plain CSS. It allows us to write code that is more succinct, efficient, reusable, and manageable.</p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/sass-me-fbb0de2ba4bf?source=friends_link&sk=fa6daa56bafd67d6f25874e9ce3f65a2">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Asynchronous Programming</h2>
               <p>Understanding JavaScript Asynchronous Functions</p>
               <br></br>
               <CardMedia
                  className="blog-img"
                  component="img"
                  alt="Async Thread"
                  height="300"
                  image="img/async-thread.png"
               >
               </CardMedia>
               <CardContent>
                  <p>Asynchronous programming can be incredibly useful in creating
                  efficient, responsive applications that greatly improve the user
                  experience. This is a basic guide to what it is and how to implement it.</p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/asynchronous-programming-51a407292698?source=friends_link&sk=96ae1e2ba521d13bdd715d0ee2589302">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>How To Approach Algorithms</h2>
               <p>Understanding and Breaking Down Algorithmic Problems</p>
               <br></br>
               <br></br>
               <CardMedia
                  component="img"
                  alt="Algorithms"
                  height="300"
                  image="img/algorithms.jpg"
               >
               </CardMedia>
               <CardContent>
                  <p>A short and helpful guide on how to approach algorithmic problems.</p>
                  <br></br>
                  <p>
                     <em>Published on JavaScript in Plain English</em>
                  </p>
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
               <p>Creating Web Applications That Work for Everyone</p>
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
                     href="https://medium.com/@cindylouwho92/accessibility-inclusion-on-the-web-a9dfc9796277?source=friends_link&sk=4c2defe12efe726ece294fd05b55708d">Read Article → </a>
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
                  className="blog-img"
                  height="300"
                  image="img/ai-criminal.jpeg"
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
                     href="https://medium.com/@cindylouwho92/the-effects-of-technology-on-the-criminal-justice-system-7aa5b417043b?source=friends_link&sk=d98904bd2d74175006eba5886d1ddc94">Read Article → </a>
               </CardContent>
            </Card>
            <br></br>
            <Card className="project-card">
               <h2>Keep It Clean</h2>
               <p>The Importance of Keeping Your Code Dry and Clean</p>
               <br></br>
               <CardMedia
                  className="blog-img"
                  component="img"
                  alt="Red Green Refactor"
                  height="300"
                  image="img/red-green-refactor.jpeg"
               >
               </CardMedia>
               <CardContent>
                  <p>
                     Tips and tricks for keeping your code clean, organized, concise, and maintainable.
                  </p>
                  <br></br>
                  <Divider></Divider>
                  <br></br>
                  <a target="_blank"
                     rel="noopener noreferrer"
                     className="plain-link"
                     href="https://medium.com/@cindylouwho92/keep-it-clean-42ef83763fd8?source=friends_link&sk=4fc34fbdf7b1bf18b05daec999db9604">Read Article → </a>
               </CardContent>
            </Card>
         </div>
      </div>
   )
}

export default Blog; 
