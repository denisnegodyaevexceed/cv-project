import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import allPortfolioActions from '../../actions/portfolioActions';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const Portfolio = () => {
    const dispatch =useDispatch()

    const {firstProject, secondProject, thierdProject, fourthProject} = useSelector(state => state.portfolioReducer)

    const classes = useStyles();


    return (
        <div className='container'>
            <h2>Tell about your best projects.</h2>
            <h3>First project</h3>
                <form className={classes.root} noValidate autoComplete="off">
                    
                    <TextField value={firstProject.name} label="Project name" variant="outlined"/>
                    <TextField value={firstProject.link} label='Link to this project' variant='outlined'/>
                    <TextField value={firstProject.summary} label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField value={firstProject.whatYouDo} label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField value={firstProject.stack} label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
                <h3>Second project</h3>
                <form className={classes.root} noValidate autoComplete="off">
                    
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
                <h3>Thierd project</h3>
                <form className={classes.root} noValidate autoComplete="off">
                    
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
                <h3>Fourth project</h3>
                <form className={classes.root} noValidate autoComplete="off">
                    
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