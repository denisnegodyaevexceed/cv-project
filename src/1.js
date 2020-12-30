import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';
import allTemplateActions from "./actions/templateActions";



const Test = () => {
        const dispatch = useDispatch();

        const { theme, checkedA } = useSelector((state) => state.templateReducer);
        const [checked, setChecked] = useState(true)
        const check = localStorage.getItem("checkedA")==='true'? true: false
        console.log(check, 'check')
        const handleChangeChecked = () => {
                setChecked(!checked)
                localStorage.setItem('checkedA', checked)
                //       dispatch(allTemplateActions.setCheckedA())
        }
        const body = document.querySelector('body');
        const load = document.querySelector('.loadPage')
       


        useEffect(() => {
                if (check) {
                        dispatch(allTemplateActions.setThemeDark());
                        body.style.background = 'linear-gradient(45deg, rgb(0, 0, 0) 55%, rgb(247, 77, 51) 5%) no-repeat fixed'
                } else {
                        dispatch(allTemplateActions.setThemeLight());
                        body.style.background = 'linear-gradient(45deg, rgb(157, 120, 210), rgb(86, 181, 184)) no-repeat fixed'
                }
        }, [check])


        return (

                <div className="page">
                        <div className='switch'>
                                <h2 className={check ? 'theme1' : 'theme2'}>{check ? 'Dark theme' : 'Light theme'}</h2>
                                <Switch
                                        color="primary"
                                        checked={check}
                                        onChange={handleChangeChecked}
                                        name="checked"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                        </div>


                        <div className="wrap" >
                                <Box className={check ? "btn2" : "btn3"} to="/templates" component={Link} >Create Resume</Box>

                        </div>
                </div>




        )

};



export default Test;