import React,{useEffect, useState} from 'react';
import {Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';
import allTemplateActions from "./actions/templateActions";



const Test = ()=> {
  const dispatch = useDispatch();

  const { theme, checkedA } = useSelector((state) => state.templateReducer);

       
             

              const handleChangeChecked = () => {
                      dispatch(allTemplateActions.setCheckedA(!checkedA))
              }
             const body = document.querySelector('body');
             const load = document.querySelector('.loadPage')
             console.log(12,body)
             

        useEffect(()=>{
                if (checkedA){
                        dispatch(allTemplateActions.setThemeDark());
                        body.style.background = 'linear-gradient(45deg, rgb(0, 0, 0) 55%, rgb(247, 77, 51) 5%) no-repeat fixed'
                }else{
                        dispatch(allTemplateActions.setThemeLight());
                        body.style.background = 'linear-gradient(45deg, rgb(157, 120, 210), rgb(86, 181, 184)) no-repeat fixed'
                }
        },[checkedA])

             
        return (
           
            <div className="page">
                    <div className='switch'>
                    <h2 className={checkedA?'theme1':'theme2'}>{checkedA?'Dark theme':'Light theme'}</h2>
              <Switch
              color="primary"
        checked={checkedA}
        onChange={handleChangeChecked}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
                    </div>
                    
            
            <div className="wrap" >
    <Box className={checkedA?"btn2":"btn3"} to="/templates" component={Link} >Create Resume</Box>
    
    </div>
            </div>
            
           
      
           
        )
    
};



export default Test;