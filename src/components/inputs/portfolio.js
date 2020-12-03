import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import allPortfolioActions from '../../actions/portfolioActions';
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


const Portfolio = () => {
    const dispatch =useDispatch()

    const {firstProject, secondProject, thierdProject, fourthProject} = useSelector(state => state.portfolioReducer)

    const classes = useStyles();
    const classes2 = useStyles2();

    return (
        <div className='container'>
            <div className={classes2.root}>
            <h2>Tell about your best projects.</h2>

       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes2.heading}><h3>First project.</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={firstProject.name} onChange={e=>dispatch(allPortfolioActions.setFirstProjectName(e.target.value))} label="Project name" variant="outlined"/>
                    <TextField value={firstProject.link} onChange={e=>dispatch(allPortfolioActions.setFirstProjectLink(e.target.value))} label='Link to this project' variant='outlined'/>
                    <TextField 
                    value={firstProject.summary}
                    onChange={e=>dispatch(allPortfolioActions.setFirstProjectSummary(e.target.value))}
                    label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField value={firstProject.whatYouDo}
                    onChange={e=>dispatch(allPortfolioActions.setFirstProjectWhatYouDo(e.target.value))}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes2.heading}><h3>Second project</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={secondProject.name} onChange={e=>dispatch(allPortfolioActions.setSecondProjectName(e.target.value))} label="Project name" variant="outlined"/>
                    <TextField value={secondProject.link} onChange={e=>dispatch(allPortfolioActions.setSecondProjectLink(e.target.value))} label='Link to this project' variant='outlined'/>
                    <TextField 
                    value={secondProject.summary}
                    onChange={e=>dispatch(allPortfolioActions.setSecondProjectSummary(e.target.value))}
                    label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={secondProject.whatYouDo}
                    onChange={e=>dispatch(allPortfolioActions.setSecondProjectWhatYouDo(e.target.value))}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes2.heading}><h3>Thierd project</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={thierdProject.name} onChange={e=>dispatch(allPortfolioActions.setThierdProjectName(e.target.value))} label="Project name" variant="outlined"/>
                    <TextField value={thierdProject.link} onChange={e=>dispatch(allPortfolioActions.setThierdProjectLink(e.target.value))} label='Link to this project' variant='outlined'/>
                    <TextField 
                    value={thierdProject.summary}
                    onChange={e=>dispatch(allPortfolioActions.setThierdProjectSummary(e.target.value))}
                    label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={thierdProject.whatYouDo}
                    onChange={e=>dispatch(allPortfolioActions.setThierdProjectWhatYouDo(e.target.value))}
                    label='What you did here?' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={thierdProject.stack}
                    onChange={e=>dispatch(allPortfolioActions.setThierdProjectStack(e.target.value))}
                    label='Stack' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes2.heading}><h3>Fourth project</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={fourthProject.name} onChange={e=>dispatch(allPortfolioActions.setFourthProjectName(e.target.value))} label="Project name" variant="outlined"/>
                    <TextField value={fourthProject.link} onChange={e=>dispatch(allPortfolioActions.setFourthProjectLink(e.target.value))} label='Link to this project' variant='outlined'/>
                    <TextField 
                    value={fourthProject.summary}
                    onChange={e=>dispatch(allPortfolioActions.setFourthProjectSummary(e.target.value))}
                    label='Summary' 
                    variant='outlined'
                    multiline
                    rowsMax={10}
                    id="outlined-multiline-flexible"/>
                    <TextField 
                    value={fourthProject.whatYouDo}
                    onChange={e=>dispatch(allPortfolioActions.setFourthProjectWhatYouDo(e.target.value))}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
                
                
                
                
        </div>
    )
}

export default Portfolio


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

// export default function SimpleAccordion() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography className={classes.heading}>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography className={classes.heading}>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
