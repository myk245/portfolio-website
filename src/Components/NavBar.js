import React from 'react';
import { AppBar, Toolbar, IconButton, Avatar} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles => ({
   rightToolbar: {
      marginLeft: "auto", 
      marginRight: "auto"
   }
}); 

export default function NavBar() {
   const classes = useStyles(); 

   return (
      <div>
         <AppBar position="static" style={{ background: 'white' }}>
            <Toolbar>
               <a href='/'>
                  <Avatar
                     alt="Cindy Kei logo"
                     src="wave-logo.png"
                     id="avatar-logo"
                  />
               </a>
               
               <div className={classes.rightToolbar}>
                  <IconButton
                     edge="start"
                     aria-label="menu"
                     className={classes.menuButton}
                  >
                     <MenuRoundedIcon />
                  </IconButton>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   )
}
