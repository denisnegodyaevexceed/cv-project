import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import allAboutMeActions from '../../actions/aboutMeActions';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


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
const useStyles3 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function AboutMe() {
 

    const dispatch = useDispatch()

    let {firstName, avatar, secondName, careerObjective, aboutMeInfo, email, vkontakte, skype, phoneNumber, github, facebook, education,languages} = useSelector(state => state.aboutMeReducer)


    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3()
    

  

    let educationCounter = (180 - education.length) + ' letters left.'
    let aboutMeInfoCounter = (180 - aboutMeInfo.length) + ' letters left.'
    let languagesCounter = (180 - languages.length) + ' letters left.'
    
    return (
        <div className="container-pdf">
<div className={classes2.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading}><h2>Tell about yourself.</h2></div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <form className={classes.root} noValidate autoComplete="off">
            
            <TextField required value={firstName}  onChange={(e) => {dispatch(allAboutMeActions.setFirstNameAction(e.target.value.length <= 12 ? e.target.value : firstName)) }}id="firstName" label="First name" variant="outlined" />
            <TextField required value={secondName} onChange={(e) => {dispatch(allAboutMeActions.setSecondNameAction(e.target.value.length <= 12 ? e.target.value : secondName))}} id="secondName" label="Second name" variant="outlined" />
            <TextField required value={careerObjective} onChange={(e) => {dispatch(allAboutMeActions.setCareerObjectiveAction(e.target.value))}} id="position" label="Your position" variant="outlined" />

            <TextField
                    label="About your education"
                    multiline
                    type='text'
                    helperText={education.length>0? educationCounter: ''}
                    rowsMax={10}
                    value={education}
                    onChange={(e) => {dispatch(allAboutMeActions.setEducationAction(e.target.value.length <= 180 ? e.target.value : education))}}
                    variant="outlined"
                />
                <TextField
                    label="Languages"
                    multiline
                    type='text'
                    helperText={languages.length>0? languagesCounter: ''}
                    rowsMax={10}
                    value={languages}
                    onChange={(e) => {dispatch(allAboutMeActions.setLanguagesAction(e.target.value.length <= 180 ? e.target.value : languages))}}
                    variant="outlined"
                />
               
            <TextField
            
                    label="Something about you"
                    helperText={aboutMeInfo.length>0? aboutMeInfoCounter: ''}
                    multiline
                    rowsMax={10}
                    value={aboutMeInfo}
                    onChange={(e) => {dispatch(allAboutMeActions.setAboutMeInfoAction(e.target.value.length <= 180 ? e.target.value : aboutMeInfo))}}
                    variant="outlined"
                />
              <input accept="image/*" onChange={(e) => dispatch(allAboutMeActions.setAvatarAction(URL.createObjectURL(e.target.files[0]), e.target.files[0]))} className={classes3.input} id="icon-button-file3" type="file" />
      <label htmlFor="icon-button-file3">
        <IconButton  aria-label="upload picture" component="span">
          
          <PhotoCamera className='photoInput'/>
        </IconButton>
      </label>
      
     
        </form>
        {avatar && <img src={avatar} className='inputAvatar' alt='avatar'/>}
        <div>* - requared fields</div>
          </div>
        </AccordionDetails>
      </Accordion>
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className={classes2.heading}><h2>Please add your contacts.</h2></div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField value={email} onChange={(e) => {dispatch(allAboutMeActions.setEmailAction(e.target.value))}} required type='email' label="Email" variant="outlined" />
            <TextField value={vkontakte} onChange={(e) => {dispatch(allAboutMeActions.setVkontakteAction(e.target.value))}} label="Vkontakte" variant="outlined" />
            <TextField value={skype} onChange={(e) => {dispatch(allAboutMeActions.setSkypeAction(e.target.value))}} label="Skype" variant="outlined" />
            <TextField value={phoneNumber} onChange={(e) => {dispatch(allAboutMeActions.setPhoneNumberAction(e.target.value))}} label="Phone number" variant="outlined" />
            <TextField value={github} onChange={(e) => {dispatch(allAboutMeActions.setGithubAction(e.target.value))}} label="Github" variant="outlined" />
            <TextField value={facebook} onChange={(e) => {dispatch(allAboutMeActions.setFacebookAction(e.target.value))}} label="Facebook" variant="outlined" />
        </form>
        <div>* - requared fields</div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>

    
    </div>
    );
}

