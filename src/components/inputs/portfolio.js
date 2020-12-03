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
                    <TextField label="Project name" variant="outlined"/>
                    <TextField label='Link to this project' variant='outlined'/>
                    <TextField label='Summary' 
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
