import React from 'react';
import { Paper } from '@material-ui/core'; 

function Blog() {
   return (
      <div>
         <Paper
            elevation={1}
            style={{ padding: 40, margin: 40, backgroundColor: "#fff0f0" }}
            variant="outlined"
         >
            <p className="page-title">Blog Posts</p>
         </Paper>
      </div>
   ) 
}

export default Blog; 
