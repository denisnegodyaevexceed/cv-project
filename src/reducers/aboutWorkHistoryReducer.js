const initialState = {
    firstCompany: 'Company1',
    firstPosition: 'Developer1',
    firstDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
    secondCompany: 'Company2',
    secondPosition: 'Developer2',
    secondDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
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