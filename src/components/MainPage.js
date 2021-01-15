import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import SwitchTheme from './SwitchTheme';


const MainPage = () => {  
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



export default MainPage;