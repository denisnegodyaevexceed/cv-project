const initialState = {
    firstName: '',
    secondName: '',
    careerObjective: '',
    age: '',
    aboutMeInfo: '',
    email: '',
    vkontakte: '',
    skype: '',
    phoneNumber: '',
    github: '',
    facebook: ''
}


const aboutMeReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_USER_FIRSTNAME':
            return {
            ...state,
            firstName: actions.payload
        }
        case 'SET_USER_SECONDNAME':
            return {
            ...state,
            secondName: actions.payload
        }
        case 'SET_USER_CAREEROBJECTIVE':
            return {
            ...state,
            careerObjective: actions.payload
        }
        case 'SET_USER_AGE':
            return {
            ...state,
            age: actions.payload
        }
        case 'SET_USER_ABOUTME':
            return {
            ...state,
            aboutMeInfo: actions.payload
        }
        case 'SET_USER_EMAIL':
            return {
            ...state,
            email: actions.payload
        }
        case 'SET_USER_VKONTAKTE':
            return {
            ...state,
            vkontakte: actions.payload
        }
        case 'SET_USER_SKYPE':
            return {
            ...state,
            skype: actions.payload
        }
        case 'SET_USER_PHONENUMBER':
            return {
            ...state,
            phoneNumber: actions.payload
        }
        case 'SET_USER_GITHUB':
            return {
            ...state,
            github: actions.payload
        }
        case 'SET_USER_FACEBOOK':
            return {
            ...state,
            facebook: actions.payload
        }
        default:
            return state
    }
}

export default aboutMeReducer