const initialState = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    careerObjective: 'Full-Stack Web Developer',
    age: '',
    aboutMeInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    email: 'ivan.ivanov@mail.ru',
    vkontakte: 'http://localhost:3000/',
    skype: 'localhost:3000',
    phoneNumber: '89009009090',
    github: 'http://localhost:3000/',
    facebook: 'http://localhost:3000/',
    education: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    avatar: '',
    languages:'English, Russian',
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
            case 'SET_LANGUAGES':
                return{
                    ...state,
                    languages: actions.payload
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