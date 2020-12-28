import React,{useEffect, useState} from 'react';
import {Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';
import allTemplateActions from "./actions/templateActions";



const Test = ()=> {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.templateReducer);

        const [state, setState] = useState({
                checkedA: true,

              });
              const handleChange = (event) => {
                setState({ ...state, [event.target.name]: event.target.checked });
              };
             const body = document.querySelector('body');
             const load = document.querySelector('.loadPage')
             console.log(12,body)
             
        //      const setLightTheme = () => {
        //         dispatch(allTemplateActions.setThemeLight());
        //      }

        //      const setDarkTheme = () => {
        //         dispatch(allTemplateActions.setThemeDark());
        //      }

             
        useEffect(()=>{
                if (state.checkedA){
                        dispatch(allTemplateActions.setThemeDark());
                        body.style.background = 'linear-gradient(45deg, rgb(0, 0, 0) 55%, rgb(247, 77, 51) 5%) no-repeat fixed'
                }else{
                        dispatch(allTemplateActions.setThemeLight());
                        body.style.background = 'linear-gradient(45deg, rgb(157, 120, 210), rgb(86, 181, 184)) no-repeat fixed'
                }
        },[state.checkedA])

             
        return (
           
            <div className="page">
                    <div className='switch'>
                    <h2 className={state.checkedA?'theme1':'theme2'}>{state.checkedA?'Dark theme':'Light theme'}</h2>
              <Switch
              color="primary"
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
                    </div>
                    
            
            <div className="wrap" >
    <Box className={state.checkedA?"btn2":"btn3"} to="/templates" component={Link} >Create Resume</Box>
    
    </div>
            </div>
            
           
      
           
        )
    
};



export default Test;