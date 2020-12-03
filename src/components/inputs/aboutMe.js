import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux';
import allAboutMeActions from '../../actions/aboutMeActions';
import Container from '@material-ui/core/Container';
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

export default function AboutMe() {
 

    const dispatch = useDispatch()

    let {firstName, secondName, age, careerObjective, aboutMeInfo, email, vkontakte, skype, phoneNumber, github, facebook, education} = useSelector(state => state.aboutMeReducer)


    const classes = useStyles();
    const classes2 = useStyles2();
    

    const ageArr = []

    for (let i = 16; i <= 100; i++) {
        ageArr.push(i)
    }

    
    return (
        <div className="container-pdf">
<div className={classes2.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes2.heading}><h2>Tell about yourself.</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className={classes.root} noValidate autoComplete="off">
            
            <TextField value={firstName}  onChange={(e) => {dispatch(allAboutMeActions.setFirstNameAction(e.target.value)) }}id="firstName" label="First name" variant="outlined" />
            <TextField value={secondName} onChange={(e) => {dispatch(allAboutMeActions.setSecondNameAction(e.target.value))}} id="secondName" label="Second name" variant="outlined" />
            <TextField value={careerObjective} onChange={(e) => {dispatch(allAboutMeActions.setCareerObjectiveAction(e.target.value))}} id="firstName" label="Your position" variant="outlined" />

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={(e) => {dispatch(allAboutMeActions.setAgeAction(e.target.value))}}
                    label="Age"
                >
                    {
                        ageArr.map((item, index) => {
                            return (
                                <MenuItem value={item} key={index}>{item}</MenuItem>
                            )
                        })
                    }
                </Select>
                
            </FormControl>
            <TextField
                    id="outlined-multiline-flexible"
                    label="About your education"
                    multiline
                    rowsMax={10}
                    value={education}
                    onChange={(e) => {dispatch(allAboutMeActions.setEducationAction(e.target.value))}}
                    variant="outlined"
                />
            <TextField
                    id="outlined-multiline-flexible"
                    label="Something about you"
                    multiline
                    rowsMax={10}
                    value={aboutMeInfo}
                    onChange={(e) => {dispatch(allAboutMeActions.setAboutMeInfoAction(e.target.value))}}
                    variant="outlined"
                />
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
          <Typography className={classes2.heading}><h2>Please, add your contacts.</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField value={email} onChange={(e) => {dispatch(allAboutMeActions.setEmailAction(e.target.value))}} required type='email' label="Email" variant="outlined" />
            <TextField value={vkontakte} onChange={(e) => {dispatch(allAboutMeActions.setVkontakteAction(e.target.value))}} label="Vkontakte" variant="outlined" />
            <TextField value={skype} onChange={(e) => {dispatch(allAboutMeActions.setSkypeAction(e.target.value))}} label="Skype" variant="outlined" />
            <TextField value={phoneNumber} onChange={(e) => {dispatch(allAboutMeActions.setPhoneNumberAction(e.target.value))}} label="Phone number" variant="outlined" />
            <TextField value={github} onChange={(e) => {dispatch(allAboutMeActions.setGithubAction(e.target.value))}} label="Github" variant="outlined" />
            <TextField value={facebook} onChange={(e) => {dispatch(allAboutMeActions.setFacebookAction(e.target.value))}} label="Facebook" variant="outlined" />
        </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

    
    </div>
    );
}

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