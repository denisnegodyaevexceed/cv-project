const initialState = {
    frontendTech: '',
    backendTech: '',
    dbsTech: '',
    otherTech: '',
    techList: [],
}


const addTechnologyReducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'SET_FRONTEND_TECHNOLOGY':
            return {
                ...state,
                frontendTech: actions.payload
            }
        case 'ADD_YOUR_TECHNOLOGY':
            return {
                ...state,
                techList: actions.payload
            }
        default :
        return state
    }
}

export default addTechnologyReducer