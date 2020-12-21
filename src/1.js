import React from 'react';
import {Link } from "react-router-dom";
import Box from '@material-ui/core/Box';



const Test = ()=> {
   
        return (
           
            <div className="page">
                
              
            
            <div className="wrap" >
    <Box className="btn2" to="/templates" component={Link} >Create Resume</Box>
    
    </div>
            </div>
            
           
      
           
        )
    
};



export default Test;