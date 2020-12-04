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
    facebook: '',
    education: '',
    avatar: ''
}


const aboutMeReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_FIRSTNAME':
            return {
            ...state,
            firstName: actions.payload
        }
        case 'SET_SECONDNAME':
            return {
            ...state,
            secondName: actions.payload
        }
        case 'SET_CAREEROBJECTIVE':
            return {
            ...state,
            careerObjective: actions.payload
        }
        case 'SET_ABOUTME':
            return {
            ...state,
            aboutMeInfo: actions.payload
        }
        case 'SET_EMAIL':
            return {
            ...state,
            email: actions.payload
        }
        case 'SET_VKONTAKTE':
            return {
            ...state,
            vkontakte: actions.payload
        }
        case 'SET_SKYPE':
            return {
            ...state,
            skype: actions.payload
        }
        case 'SET_PHONENUMBER':
            return {
            ...state,
            phoneNumber: actions.payload
        }
        case 'SET_GITHUB':
            return {
            ...state,
            github: actions.payload
        }
        case 'SET_FACEBOOK':
            return {
            ...state,
            facebook: actions.payload
        }
        case 'SET_EDUCATION':
            return{
                ...state,
                education: actions.payload
            }
        case 'SET_AVATAR':
            return{
                ...state,
                avatar: actions.payload
            }
        default:
            return state
    }
}

export default aboutMeReducer