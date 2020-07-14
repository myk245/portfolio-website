import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
return (
   <div class="logo-div">
      <img src="wave-logo.png" class="logo"></img>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/about">
         Click here to learn more about me →
      </Link>   
   </div>
   )
}

export default Logo; 