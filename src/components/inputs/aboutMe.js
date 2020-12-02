import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux';
import allAboutMeActions from '../actions/aboutMeActions';
import Button from '@material-ui/core/Button'
import { Redirect, Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function AboutMe() {

    const dispatch = useDispatch()

    let {firstName, secondName, age, careerObjective, aboutMeInfo, email, vkontakte, skype, phoneNumber, github, facebook} = useSelector(state => state.aboutMeReducer)


    const classes = useStyles();

    

    const ageArr = []

    for (let i = 16; i <= 100; i++) {
        ageArr.push(i)
    }

    
    return (<div className='aboutMeInputs'>
        <h2>Расскажите о себе</h2>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField value={firstName} onChange={(e) => {dispatch(allAboutMeActions.setUserFirstNameAction(e.target.value))}}id="firstName" label="Имя" variant="outlined" />
            <TextField value={secondName} onChange={(e) => {dispatch(allAboutMeActions.setUserSecondNameAction(e.target.value))}} id="secondName" label="Фамилия" variant="outlined" />
            <TextField value={careerObjective} onChange={(e) => {dispatch(allAboutMeActions.setUserCareerObjectiveAction(e.target.value))}} id="firstName" label="Желаемая должность" variant="outlined" />

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Возраст</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={(e) => {dispatch(allAboutMeActions.setUserAgeAction(e.target.value))}}
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
                    label="О себе"
                    multiline
                    rowsMax={10}
                    value={aboutMeInfo}
                    onChange={(e) => {dispatch(allAboutMeActions.setUserAboutMeInfoAction(e.target.value))}}
                    variant="outlined"
                />
        </form>
        <h2>Контактная информация</h2>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField value={email} onChange={(e) => {dispatch(allAboutMeActions.setUserEmailAction(e.target.value))}} required type='email' label="Почта" variant="outlined" />
            <TextField value={vkontakte} onChange={(e) => {dispatch(allAboutMeActions.setUserVkontakteAction(e.target.value))}} label="Вконтакте" variant="outlined" />
            <TextField value={skype} onChange={(e) => {dispatch(allAboutMeActions.setUserSkypeAction(e.target.value))}} label="Скайп" variant="outlined" />
            <TextField value={phoneNumber} onChange={(e) => {dispatch(allAboutMeActions.setUserPhoneNumberAction(e.target.value))}} label="Номер телефона" variant="outlined" />
            <TextField value={github} onChange={(e) => {dispatch(allAboutMeActions.setUserGithubAction(e.target.value))}} label="Гитхаб" variant="outlined" />
            <TextField value={facebook} onChange={(e) => {dispatch(allAboutMeActions.setUserFacebookAction(e.target.value))}} label="Фэйсбук" variant="outlined" />
        </form>
       
        <Button variant="contained" color="primary" to='/aboutwork' component={Link}>
  Далее
</Button>

    </div>
    );
}