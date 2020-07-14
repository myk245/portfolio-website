import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Logo from './Components/Logo'; 
import NavBar from './Components/NavBar';
import Icons from './Components/Icons'; 
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Logo} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
