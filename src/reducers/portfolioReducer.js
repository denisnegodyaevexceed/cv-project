const initialState = {
    firstProject: {
        name: '',
        link: '',
        summary: '',
        whatYouDo: '',
        stack: '',
    },
    secondProject: {
        name: '',
        link: '',
        summary: '',
        whatYouDo: '',
        stack: '',
    },
    thirdProject: {
        name: '',
        link: '',
        summary: '',
        whatYouDo: '',
        stack: '',
    },
    fourthProject: {
        name: '',
        link: '',
        summary: '',
        whatYouDo: '',
        stack: '',
    }
}



const portfolioReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET_FIRSTPROJECT_NAME":
            return {
                ...state,
                firstProject: { ...state.firstProject, name: actions.payload }
            }
        case "SET_FIRSTPROJECT_LINK":
            return {
                ...state,
                firstProject: { ...state.firstProject, link: actions.payload }
            }
        case "SET_FIRSTPROJECT_SUMMARY":
            return {
                ...state,
                firstProject: { ...state.firstProject, summary: actions.payload }
            }
        case "SET_FIRSTPROJECT_WHATYOUDO":
            return {
                ...state,
                firstProject: { ...state.firstProject, whatYouDo: actions.payload }
            }
        case "SET_FIRSTPROJECT_STACK":
            return {
                ...state,
                firstProject: { ...state.firstProject, stack: actions.payload }
            }
            case "SET_SECONDPROJECT_NAME":
            return {
                ...state,
                secondProject: { ...state.secondProject, name: actions.payload }
            }
        case "SET_SECONDPROJECT_LINK":
            return {
                ...state,
                secondProject: { ...state.secondProject, link: actions.payload }
            }
        case "SET_SECONDPROJECT_SUMMARY":
            return {
                ...state,
                secondProject: { ...state.secondProject, summary: actions.payload }
            }
        case "SET_SECONDPROJECT_WHATYOUDO":
            return {
                ...state,
                secondProject: { ...state.secondProject, whatYouDo: actions.payload }
            }
        case "SET_SECONDPROJECT_STACK":
            return {
                ...state,
                secondProject: { ...state.secondProject, stack: actions.payload }
            }
            case "SET_THIRDPROJECT_NAME":
            return {
                ...state,
                thirdProject: { ...state.thirdProject, name: actions.payload }
            }
        case "SET_THIRDPROJECT_LINK":
            return {
                ...state,
                thirdProject: { ...state.thirdProject, link: actions.payload }
            }
        case "SET_THIRDPROJECT_SUMMARY":
            return {
                ...state,
                thirdProject: { ...state.thirdProject, summary: actions.payload }
            }
        case "SET_THIRDPROJECT_WHATYOUDO":
            return {
                ...state,
                thirdProject: { ...state.thirdProject, whatYouDo: actions.payload }
            }
        case "SET_THIRDPROJECT_STACK":
            return {
                ...state,
                thirdProject: { ...state.thirdProject, stack: actions.payload }
            }
            case "SET_FOURTHPROJECT_NAME":
            return {
                ...state,
                fourthProject: { ...state.fourthProject, name: actions.payload }
            }
        case "SET_FOURTHPROJECT_LINK":
            return {
                ...state,
                fourthProject: { ...state.fourthProject, link: actions.payload }
            }
        case "SET_FOURTHPROJECT_SUMMARY":
            return {
                ...state,
                fourthProject: { ...state.fourthProject, summary: actions.payload }
            }
        case "SET_FOURTHPROJECT_WHATYOUDO":
            return {
                ...state,
                fourthProject: { ...state.fourthProject, whatYouDo: actions.payload }
            }
        case "SET_FOURTHPROJECT_STACK":
            return {
                ...state,
                fourthProject: { ...state.fourthProject, stack: actions.payload }
            }
        default: 
        return state
    }
}


export default portfolioReducer