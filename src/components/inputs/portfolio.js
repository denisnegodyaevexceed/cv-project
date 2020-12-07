import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import allPortfolioActions from '../../actions/portfolioActions';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
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


const Portfolio = () => {
    const dispatch =useDispatch()

    const {firstProject, secondProject, thirdProject, fourthProject} = useSelector(state => state.portfolioReducer)

    const classes = useStyles();
    const classes2 = useStyles2();

    let firstSummaryCounter = (220 - firstProject.summary.length) + ' letters left.'
    let firstWhatYouDoCounter = (180 - firstProject.whatYouDo.length) + ' letters left.'
    let secondSummaryCounter = (220 - secondProject.summary.length) + ' letters left.'
    let secondWhatYouDoCounter = (180 - secondProject.whatYouDo.length) + ' letters left.'
    let thirdSummaryCounter = (220 - thirdProject.summary.length) + ' letters left.'
    let thirdWhatYouDoCounter = (180 - thirdProject.whatYouDo.length) + ' letters left.'
    let fourthSummaryCounter = (220 - fourthProject.summary.length) + ' letters left.'
    let fourthWhatYouDoCounter = (180 - fourthProject.whatYouDo.length) + ' letters left.'



    return (
        <div className='container'>
            <div className={classes2.root}>
            <h2 className='t-1'>Tell about your best projects.</h2>

       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div >
            <h3>First project.</h3>
            </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={firstProject.name} onChange={e=>dispatch(allPortfolioActions.setFirstProjectName(e.target.value))} label="Project name" variant="outlined"/>
                    <TextField value={firstProject.link} onChange={e=>dispatch(allPortfolioActions.setFirstProjectLink(e.target.value))} label='Link to this project' variant='outlined'/>
                    <TextField 
                    value={firstProject.summary}
                    onChange={e=>dispatch(allPortfolioActions.setFirstProjectSummary(e.target.value.length <= 220 ? e.target.value : firstProject.summary))}
                    helperText={firstProject.summary.length>0? firstSummaryCounter: ''}
                    label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField value={firstProject.whatYouDo}
                    onChange={e=>dispatch(allPortfolioActions.setFirstProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : firstProject.whatYouDo))}
                    helperText={firstProject.whatYouDo.length>0? firstWhatYouDoCounter: ''}
                    label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField value={firstProject.stack} 
                    onChange={e=>dispatch(allPortfolioActions.setFirstProjectStack(e.target.value))}
                    label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className={classes2.heading}><h3>Second project</h3></div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={secondProject.name} onChange={e=>dispatch(allPortfolioActions.setSecondProjectName(e.target.value))} label="Project name" variant="outlined"/>
                    <TextField value={secondProject.link} onChange={e=>dispatch(allPortfolioActions.setSecondProjectLink(e.target.value))} label='Link to this project' variant='outlined'/>
                    <TextField 
                    value={secondProject.summary}
                    onChange={e=>dispatch(allPortfolioActions.setSecondProjectSummary(e.target.value.length <= 220 ? e.target.value : secondProject.summary))}
                    helperText={secondProject.summary.length>0? secondSummaryCounter: ''}
                    label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={secondProject.whatYouDo}
                    onChange={e=>dispatch(allPortfolioActions.setSecondProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : secondProject.whatYouDo))}
                    helperText={secondProject.whatYouDo.length>0? secondWhatYouDoCounter: ''}
                    label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={secondProject.stack}
                    onChange={e=>dispatch(allPortfolioActions.setSecondProjectStack(e.target.value))}
                    label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className={classes2.heading}><h3>Third project</h3></div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={thirdProject.name} onChange={e=>dispatch(allPortfolioActions.setThirdProjectName(e.target.value))} label="Project name" variant="outlined"/>
                    <TextField value={thirdProject.link} onChange={e=>dispatch(allPortfolioActions.setThirdProjectLink(e.target.value))} label='Link to this project' variant='outlined'/>
                    <TextField 
                    value={thirdProject.summary}
                    onChange={e=>dispatch(allPortfolioActions.setThirdProjectSummary(e.target.value.length <= 220 ? e.target.value : thirdProject.summary))}
                    helperText={thirdProject.summary.length>0? thirdSummaryCounter: ''}
                    label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={thirdProject.whatYouDo}
                    onChange={e=>dispatch(allPortfolioActions.setThirdProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : thirdProject.whatYouDo))}
                    helperText={thirdProject.whatYouDo.length>0? thirdWhatYouDoCounter: ''}
                    label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={thirdProject.stack}
                    onChange={e=>dispatch(allPortfolioActions.setThirdProjectStack(e.target.value))}
                    label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className={classes2.heading}><h3>Fourth project</h3></div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={fourthProject.name} onChange={e=>dispatch(allPortfolioActions.setFourthProjectName(e.target.value))} label="Project name" variant="outlined"/>
                    <TextField value={fourthProject.link} onChange={e=>dispatch(allPortfolioActions.setFourthProjectLink(e.target.value))} label='Link to this project' variant='outlined'/>
                    <TextField 
                    value={fourthProject.summary}
                    onChange={e=>dispatch(allPortfolioActions.setFourthProjectSummary(e.target.value.length <= 220 ? e.target.value : fourthProject.summary))}
                    
                    helperText={fourthProject.summary.length>0? fourthSummaryCounter: ''}
                    label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={fourthProject.whatYouDo}
                    onChange={e=>dispatch(allPortfolioActions.setFourthProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : fourthProject.whatYouDo))}
                    helperText={fourthProject.whatYouDo.length>0? fourthWhatYouDoCounter: ''}
                    label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={fourthProject.stack}
                    onChange={e=>dispatch(allPortfolioActions.setFourthProjectStack(e.target.value))}
                    label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
                
                
                
                
        </div>
    )
}

export default Portfolio


