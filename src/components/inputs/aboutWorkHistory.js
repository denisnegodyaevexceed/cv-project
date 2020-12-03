import React from 'react'
import TextField from '@material-ui/core/TextField';
import allAboutWorkActions from '../../actions/aboutWorkActions';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const AboutWorkHistory = () => {

    const dispatch = useDispatch()

    let {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription } = useSelector(state => state.aboutWorkHistoryReducer)

    const classes = useStyles();
   

    return (
        <div className='container'>
            <h2>Indicate the last two places of work.</h2>
            <form   className={classes.root} noValidate autoComplete="off" >
            <TextField value={firstCompany} onChange={(e)=> dispatch(allAboutWorkActions.setFirstCompanyName(e.target.value))} label="Company" variant="outlined" />
            <TextField value={firstPosition} onChange={(e)=> dispatch(allAboutWorkActions.setFirstCompanyPosition(e.target.value))} label="Position" variant="outlined" />
            <TextField
                    id="outlined-multiline-flexible"
                    label="Tell us more"
                    multiline
                    rowsMax={10}
                    value={firstDescription}
                    onChange={(e)=> dispatch(allAboutWorkActions.setFirstCompanyDescription(e.target.value))}
                    variant="outlined"
                />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField value={secondCompany} onChange={(e)=> dispatch(allAboutWorkActions.setSecondCompanyName(e.target.value))}  label="Company" variant="outlined" />
            <TextField  value={secondPosition} onChange={(e)=> dispatch(allAboutWorkActions.setSecondCompanyPosition(e.target.value))} label="Position" variant="outlined" />
            <TextField
                    id="outlined-multiline-flexible"
                    label="Tell us more"
                    multiline
                    rowsMax={10}
                    value={secondDescription}
                    onChange={(e)=> dispatch(allAboutWorkActions.setSecondCompanyDescription(e.target.value))}
                    variant="outlined"
                />
            </form>
            
          
        </div>
    )
}


export default AboutWorkHistory