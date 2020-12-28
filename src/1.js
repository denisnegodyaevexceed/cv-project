import React,{useState} from 'react';
import {Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';



const Test = ()=> {
        const [state, setState] = useState({
                checkedA: true,

              });
              const handleChange = (event) => {
                setState({ ...state, [event.target.name]: event.target.checked });
              };
             const body = document.querySelector('body');
             const load = document.querySelector('.loadPage')
             console.log(12,body)
             if (state.checkedA){
    
    body.style.background = 'linear-gradient(45deg, rgb(0, 0, 0) 55%, rgb(247, 77, 51) 5%) no-repeat fixed'
             }else{
                     body.style.background = 'linear-gradient(45deg, rgb(157, 120, 210), rgb(86, 181, 184)) no-repeat fixed'
             }
        return (
           
            <div className="page">
                    <h2 className={state.checkedA?'theme1':'theme2'}>{state.checkedA?'Dark':'Light'}</h2>
              <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
            
            <div className="wrap" >
    <Box className={state.checkedA?"btn2":"btn3"} to="/templates" component={Link} >Create Resume</Box>
    
    </div>
            </div>
            
           
      
           
        )
    
};



export default Test;