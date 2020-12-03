import React from 'react'
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


const AboutHardSkills = () => {
    return (
        <div>
            <h2>Tell about your technical skills</h2>
        <form>
            <h3>Frontend: </h3>
            <TextField
                    id="outlined-multiline-flexible"
                    label="Frontend"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                />
            <h3>Backend: </h3>
            <TextField
                    id="outlined-multiline-flexible"
                    label="Frontend"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                />
            <h3>DBS: </h3>
            <TextField
                    id="outlined-multiline-flexible"
                    label="Frontend"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                />
            <h3>Other: </h3>
            <TextField
                    id="outlined-multiline-flexible"
                    label="Frontend"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                />
        </form>
        <Button variant="contained" color="primary" to='/aboutwork' component={Link}>
  Назад
</Button>
<Button variant="contained" color="primary" to='/portfolio' component={Link}>
  Далее
</Button>
        </div>
    )
}

export default AboutHardSkills