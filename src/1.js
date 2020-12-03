// import React from 'react'

// const Test = () => {
//     return (
//         <div id="video-bg">
//     <video id="background-video"  autoPlay>
//     <source src="./12.mp4" type="video/mp4" />
//     <source src="./12.mp4" type="video/ogg" />
//     Your browser does not support the video tag.
// </video>
// </div>
//     )
// }

// export default Test



import React, {Component} from 'react';
import { Link, Redirect, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';


const Test = ()=> {
   
        return (
            <div>
                
                <div className="wrap" >
                <Box to="/steps" component={Link} className="button1" >Create Resume</Box>
                </div>
                
            <div className="background-video">
            <video className="background-video" loop autoPlay>
                <source src='./14.mp4' type="video/mp4" />
                <source src='./14.mp4' type="video/ogg" />
                
            </video>
            </div>
            </div>
           
        )
    
};



export default Test;