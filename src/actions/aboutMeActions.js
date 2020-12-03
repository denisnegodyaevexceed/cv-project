import actions from '../constants/actionTypes'


const setUserFirstNameAction = (data) => ({
    type: actions.SET_FIRSTNAME,
    payload: data
})

const setUserSecondNameAction = (data) => ({
    type: actions.SET_SECONDNAME,
    payload: data
})

const setUserCareerObjectiveAction = (data) => ({
    type: actions.SET_CAREEROBJECTIVE,
    payload: data
})

const setUserAgeAction = (data) => ({
    type: actions.SET_AGE,
    payload: data
})

const setUserAboutMeInfoAction = (data) => ({
    type: actions.SET_ABOUTME,
    payload: data
})

const setUserEmailAction = (data) => ({
    type: actions.SET_EMAIL,
    payload: data
})

const setUserVkontakteAction = (data) => ({
    type: actions.SET_VKONTAKTE,
    payload: data
})

const setUserSkypeAction = (data) => ({
    type: actions.SET_SKYPE,
    payload: data
})

const setUserGithubAction = (data) => ({
    type: actions.SET_GITHUB,
    payload: data
})

const setUserPhoneNumberAction = (data) => ({
    type: actions.SET_PHONENUMBER,
    payload: data
})

const setUserFacebookAction = (data) => ({
    type: actions.SET_FACEBOOK,
    payload: data
})

const allAboutMeActions = {
    setUserFirstNameAction,
    setUserSecondNameAction,
    setUserCareerObjectiveAction,
    setUserAgeAction,
    setUserAboutMeInfoAction,
    setUserEmailAction,
    setUserVkontakteAction,
    setUserPhoneNumberAction,
    setUserSkypeAction,
    setUserGithubAction,
    setUserFacebookAction
}

export default allAboutMeActions