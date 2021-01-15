import React, { useEffect, useState } from 'react'
import Switch from '@material-ui/core/Switch';
import allTemplateActions from "../actions/templateActions";
import { useDispatch } from "react-redux";


const SwitchTheme = () => {
    const dispatch = useDispatch();

    
    const [checked, setChecked] = useState(true)
    const check = localStorage.getItem("checkedA")==='true'? true: false

    const handleChangeChecked = () => {
            setChecked(!checked)
            localStorage.setItem('checkedA', checked)
            //       dispatch(allTemplateActions.setCheckedA())
    }
    const body = document.querySelector('body');
//     const load = document.querySelector('.loadPage')
   


    useEffect(() => {
            if (check) {
                    dispatch(allTemplateActions.setThemeDark());
                    body.style.background = 'linear-gradient(45deg, rgb(0, 0, 0) 55%, rgb(247, 77, 51) 5%) no-repeat fixed'
            } else {
                    dispatch(allTemplateActions.setThemeLight());
                    body.style.background = 'linear-gradient(45deg, rgb(157, 120, 210), rgb(86, 181, 184)) no-repeat fixed'
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [check])
    return (
        
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
        
    )
}

export default SwitchTheme
