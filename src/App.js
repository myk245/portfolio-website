import React from 'react';
import './App.css';
import Logo from './Components/Logo'; 
import NavBar from './Components/NavBar';
import Icons from './Components/Icons'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Logo />
      <Icons />
    </div>
  );
}

export default App;
