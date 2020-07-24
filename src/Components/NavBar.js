import React from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function NavBar() {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div id="navbar">
         <AppBar position="sticky" style={{ background: 'white' }}>
            <Toolbar>
               <a href='/'>
                  <Avatar
                     alt="Cindy Kei logo"
                     src="circle-cropped.png"
                     id="avatar-logo"
                  />
               </a>

               <div id="navbar-title">
                  <img
                     src="typography-logo.png"
                     alt="name logo"
                     width="200"
                     height="100"
                  />
               </div>

               <div>
                  <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                     <MenuRoundedIcon fontSize="large"/>
                  </IconButton>
                  <Menu
                     id="simple-menu"
                     anchorEl={anchorEl}
                     keepMounted
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                  >
                     <a class="menu-items" href="/">
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                     </a>
                     <a class="menu-items" href="/about">
                        <MenuItem onClick={handleClose}>About Me</MenuItem>
                     </a>
                     <a class="menu-items" href="/technologies">
                        <MenuItem onClick={handleClose}>Technologies</MenuItem>
                     </a>
                     <a class="menu-items" href="/projects">
                        <MenuItem onClick={handleClose}>Projects</MenuItem>
                     </a>
                     <a class="menu-items" href="/experience">
                        <MenuItem onClick={handleClose}>Experience</MenuItem>
                     </a>
                     <a class="menu-items" href="/contact">
                        <MenuItem onClick={handleClose}>Get In Touch</MenuItem>
                     </a>
                  </Menu>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   )
}

export default NavBar;