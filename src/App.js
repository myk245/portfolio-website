import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Logo from './Components/Logo'; 
import NavBar from './Components/NavBar';
import Icons from './Components/Icons'; 
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact'; 
import Resume from './Components/Resume'; 
import Post from './Components/Post';
import Technologies from './Components/Technologies'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Logo} />
        <Route path="/about" component={About} />
        <Route path="/technologies" component={Technologies} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog_posts" component={Post} />
      </Switch>
      <Icons />
    </div>
  );
}

export default App;
