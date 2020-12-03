import React from 'react'
import TextField from '@material-ui/core/TextField';
import allHardSkillsActions from '../../actions/aboutHardSkillsActions';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const useStyles2 = makeStyles((theme) => ({
      root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    }));


const AboutHardSkills = () => {

    const classes = useStyles();
    const classes2 = useStyles2();

    const dispatch = useDispatch()

    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)


    return (
        <div className='container-pdf'>
            <div className={classes2.root}>
       <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes2.heading}><h2>Tell about your technical skills.</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            <h3>Backend: </h3>
            <TextField
                    id="outlined-multiline-flexible"
                    label="Backend"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                    value={backend}
                    onChange={e=> dispatch(allHardSkillsActions.setBackendAction(e.target.value))}
                />
            <h3>DBS: </h3>
            <TextField
                    id="outlined-multiline-flexible"
                    label="DBS"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                    value={dbs}
                    onChange={e=> dispatch(allHardSkillsActions.setDbsAction(e.target.value))}
                />
            <h3>Other: </h3>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>

        </div>
    )
}

export default AboutHardSkills

