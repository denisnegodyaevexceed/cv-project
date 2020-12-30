import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';
import allTemplateActions from "./actions/templateActions";
import SwitchTheme from './SwitchTheme';



const Test = () => {
       
        const check = localStorage.getItem("checkedA")==='true'? true: false


        return (

                <div className="page">
                        
                <SwitchTheme/>

                        <div className="wrap" >
                                <Box className={check ? "btn2" : "btn3"} to="/templates" component={Link} >Create Resume</Box>

                        </div>
                </div>




        )

};



export default Test;