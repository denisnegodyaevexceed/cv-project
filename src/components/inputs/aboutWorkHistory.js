import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import allAboutWorkActions from '../../actions/aboutWorkActions';
import { useDispatch, useSelector } from 'react-redux';





const AboutWorkHistory = () => {

    const dispatch = useDispatch()

    let {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription } = useSelector(state => state.aboutWorkHistoryReducer)

   

    return (
        <div>
            <h2>Укажите два последних места работы</h2>
            <form  id="firstJob" >
            <TextField value={firstCompany} onChange={(e)=> dispatch(allAboutWorkActions.setFirstCompanyName(e.target.value))} label="Компания" variant="outlined" />
            <TextField value={firstPosition} onChange={(e)=> dispatch(allAboutWorkActions.setFirstCompanyPosition(e.target.value))} label="Должность" variant="outlined" />
            <TextField
                    id="outlined-multiline-flexible"
                    label="Расскажите подробнее"
                    multiline
                    rowsMax={10}
                    value={firstDescription}
                    onChange={(e)=> dispatch(allAboutWorkActions.setFirstCompanyDescription(e.target.value))}
                    variant="outlined"
                />
            </form>
            <form id='secondJob'>
            <TextField value={secondCompany} onChange={(e)=> dispatch(allAboutWorkActions.setSecondCompanyName(e.target.value))}  label="Компания" variant="outlined" />
            <TextField  value={secondPosition} onChange={(e)=> dispatch(allAboutWorkActions.setSecondCompanyPosition(e.target.value))} label="Должность" variant="outlined" />
            <TextField
                    id="outlined-multiline-flexible"
                    label="Расскажите подробнее"
                    multiline
                    rowsMax={10}
                    value={secondDescription}
                    onChange={(e)=> dispatch(allAboutWorkActions.setSecondCompanyDescription(e.target.value))}
                    variant="outlined"
                />
            </form>
            
            <Button variant="contained" color="primary" to='/' component={Link}>
  Назад
</Button>
<Button variant="contained" color="primary" to='/abouthardskills' component={Link}>
  Далее
</Button>
        </div>
    )
}


export default AboutWorkHistory