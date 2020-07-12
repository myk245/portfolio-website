import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Avatar} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

export default function NavBar() {
   return (
      <div>
         <AppBar position="static" style={{ background: 'white' }}>
            <Toolbar>
               <Avatar
                  alt="Cindy Kei logo"
                  src="cindy-logo.png"
                  class="avatar-logo"
               />
               <IconButton edge="start" aria-label="menu">
                  <MenuRoundedIcon />
               </IconButton>
               <Typography variant="h6" class="navbar">
                  Options
               </Typography>
            </Toolbar>
         </AppBar>
      </div>
   )
}
