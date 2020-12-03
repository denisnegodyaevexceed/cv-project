import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const Portfolio = () => {
    
    const classes = useStyles();


    return (
        <div className='container'>
            <h2>Tell about your best projects.</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <h3>First project</h3>
                    <TextField label="Project name" variant="outlined"/>
                    <TextField label='Link to this project' variant='outlined'/>
                    <TextField label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                    <h3>Second project</h3>
                    <TextField label="Project name" variant="outlined"/>
                    <TextField label='Link to this project' variant='outlined'/>
                    <TextField label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                    <h3>Thierd project</h3>
                    <TextField label="Project name" variant="outlined"/>
                    <TextField label='Link to this project' variant='outlined'/>
                    <TextField label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                    <h3>Fourth project</h3>
                    <TextField label="Project name" variant="outlined"/>
                    <TextField label='Link to this project' variant='outlined'/>
                    <TextField label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
        </div>
    )
}

export default Portfolio