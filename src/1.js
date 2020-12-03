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
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import CustomizedSteppers from './main'
import { CSSTransition } from 'react-transition-group';
import Portfolio from './components/inputs/portfolio';
import App from './App';


const Test = ()=> {
   const routes =[
       
       {path:'/steps', Component:CustomizedSteppers}
   ]
        return (
            <BrowserRouter>
            <div>
                
               
                
            <div className="background-video">
            <video className="background-video" loop autoPlay autobuffer muted playsinline>
                <source src='./16.mp4' type="video/mp4" />
                <source src='./16.mp4' type="video/ogg" />
                
            </video>
            </div>
            </div>
            {routes.map(({path, Component})=>
            <Route key={path} exact path={path}>
                {({match})=>
                <CSSTransition
                timeout={1000}
                classNames="page"
                unmountOnExit
                in={match !== null}
                >
                    <Component/>
                </CSSTransition>
                }

            </Route>
            )}
            </BrowserRouter>
           
        )
    
};



export default Test;