import React from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem} from '@material-ui/core';
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
      <div id="navbar">
         <AppBar position="sticky" style={{ background: 'white' }}>
            <Toolbar>
               <a href='/'>
                  <Avatar
                     alt="Cindy Kei logo"
                     src="wave-logo.png"
                     id="avatar-logo"
                  />
               </a>
               
               <div className={classes.rightToolbar}>
                  <Menu
                     id="simple-menu"
                     keepMounted
                  >
                     <MenuItem >Profile</MenuItem>
                     <MenuItem >My account</MenuItem>
                     <MenuItem >Logout</MenuItem>
                  </Menu>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   )
}
