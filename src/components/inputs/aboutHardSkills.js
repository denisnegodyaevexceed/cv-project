import React from 'react'
import TextField from '@material-ui/core/TextField';
import allHardSkillsActions from '../../actions/aboutHardSkillsActions';
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



const AboutHardSkills = () => {

    const classes = useStyles();
    const dispatch = useDispatch()

    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)


    return (
        <div className='container'>
            <h2>Tell about your technical skills.</h2>
            <h3>Frontend: </h3>
        <form className={classes.root} noValidate autoComplete="off">
            <h3>Frontend: </h3>
            <TextField
                    id="outlined-multiline-flexible"
                    label="Frontend"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                    value={frontend}
                    onChange={e=> dispatch(allHardSkillsActions.setFrontendAction(e.target.value))}
                />
                 </form>
            <h3>Backend: </h3>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField
                    id="outlined-multiline-flexible"
                    label="Backend"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                    value={backend}
                    onChange={e=> dispatch(allHardSkillsActions.setBackendAction(e.target.value))}
                />
                </form>
            <h3>DBS: </h3>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField
                    id="outlined-multiline-flexible"
                    label="DBS"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                    value={dbs}
                    onChange={e=> dispatch(allHardSkillsActions.setDbsAction(e.target.value))}
                />
            </form>
            <h3>Other: </h3>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField
                    id="outlined-multiline-flexible"
                    label="Other"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                    value={other}
                    onChange={e=> dispatch(allHardSkillsActions.setOtherAction(e.target.value))}
                />
        </form>
       
        </div>
    )
}

export default AboutHardSkills