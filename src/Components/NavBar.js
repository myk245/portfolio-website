import React from 'react';
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

export default function NavBar() {
   return (
      <div>
         <AppBar position="static" style={{ background: 'white' }}>
            <Toolbar>
               <IconButton edge="start" aria-label="menu">
                  <MenuRoundedIcon />
               </IconButton>
               <Typography variant="h6">
                  News
               </Typography>
            </Toolbar>
         </AppBar>
      </div>
   )
}
