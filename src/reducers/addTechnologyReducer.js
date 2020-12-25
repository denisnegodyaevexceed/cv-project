const initialState = {
    frontendTech: '',
    backendTech: '',
    dbsTech: '',
    otherTech: '',
    techList: [],
}


const addTechnologyReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SET_FRONTEND_TECHNOLOGY':
            return {
                ...state,
                frontendTech: actions.payload
            }
        case 'SET_BACKEND_TECHNOLOGY':
            return {
                ...state,
                backendTech: actions.payload
            }
        case 'SET_DBS_TECHNOLOGY':
            return {
                ...state,
                dbsTech: actions.payload
            }
        case 'SET_OTHER_TECHNOLOGY':
            return {
                ...state,
                otherTech: actions.payload
            }
        case 'ADD_YOUR_TECHNOLOGY':
            return {
                ...state,
                techList: actions.payload
            }
        case 'SET_SAVED_TECH':
            return {
                ...state,
                techList: actions.payload
            }
        case 'SET_CLEAR_TECHNOLOGIES':
            return {
                ...state,
                frontendTech: '',
                backendTech: '',
                dbsTech: '',
                otherTech: '',
            }
        default:
            return state
    }
}

export default addTechnologyReducer