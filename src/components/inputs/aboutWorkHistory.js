import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Redirect, Link } from "react-router-dom";


const AboutWorkHistory = () => {
    return (
        <div>
            <h2>Укажите три последних места работы или проекта</h2>
            <form  id="firstJob" >
            <TextField   label="Компания" variant="outlined" />
            <TextField  label="Должность" variant="outlined" />
            <TextField
                    id="outlined-multiline-flexible"
                    label="Расскажите подробнее"
                    multiline
                    rowsMax={10}
                    
                    
                    variant="outlined"
                />
            </form>
            <form id='secondJob'>
            <TextField   label="Компания" variant="outlined" />
            <TextField   label="Должность" variant="outlined" />
            <TextField
                    id="outlined-multiline-flexible"
                    label="Расскажите подробнее"
                    multiline
                    rowsMax={10}
                    
                    
                    variant="outlined"
                />
            </form>
            <form id='thierdJob'>
            <TextField   label="Компания" variant="outlined" />
            <TextField   label="Должность" variant="outlined" />
            <TextField
                    id="outlined-multiline-flexible"
                    label="Расскажите подробнее"
                    multiline
                    rowsMax={10}
                    
                    
                    variant="outlined"
                />
            </form>
            <Button variant="contained" color="primary" to='/' component={Link}>
  Назад
</Button>
<Button variant="contained" color="primary" to='/portfolio' component={Link}>
  Далее
</Button>
        </div>
    )
}


export default AboutWorkHistory