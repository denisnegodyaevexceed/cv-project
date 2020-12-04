import React from 'react';
import {Link } from "react-router-dom";
import Box from '@material-ui/core/Box';



const Test = ()=> {
   
        return (
           
            <div>
                
               
                
            <div className="background-video">
            <video className="background-video" loop autoPlay autobuffer muted playsinline>
                <source src='./16.mp4' type="video/mp4" />
                <source src='./16.mp4' type="video/ogg" />
                
            </video>
            </div>
            <div className="wrap" >
    <Box className="btn2" to="/steps" component={Link} >Create Resume</Box>
    {/* <Box to="/steps" component={Link} className="button1" >Create Resume</Box> */}
    </div>
            </div>
            
           
      
           
        )
    
};



export default Test;