const initialState = {
    firstCompany: '',
    firstPosition: '',
    firstDescription: '',
    
    secondCompany: '',
    secondPosition: '',
    secondDescription: '',
}


const aboutWorkHistoryReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'SET_FIRSTCOMPANY_NAME':
            return {
                ...state,
                firstCompany: actions.payload,
            }
        
        case 'SET_FIRSTCOMPANY_POSITION':
            return {
                ...state,
                firstPosition: actions.payload
            }
        case 'SET_FIRSTCOMPANY_DESCRIPTION':
            return {
                ...state,
                firstDescription: actions.payload
            }
        case 'SET_SECONDCOMPANY_NAME':
            return {
                ...state,
                secondCompany: actions.payload
            }
        case 'SET_SECONDCOMPANY_POSITION':
            return {
                ...state,
                secondPosition: actions.payload
            }
        case 'SET_SECONDCOMPANY_DESCRIPTION':
            return {
                ...state,
                secondDescription: actions.payload
            }
        default:
            return state
    }
}

export default aboutWorkHistoryReducer