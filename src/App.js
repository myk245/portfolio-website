import React from 'react';
import './App.css';
import Home from './Components/Home'; 
import About from './Components/About'; 
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
