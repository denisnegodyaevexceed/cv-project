const initialState = {
    templateNumber: ''
}

const templateReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_TEMPLATE_NUMBER':
            return {
                ...state,
                templateNumber: actions.payload
            }
        default:
            return state    
    }
}

export default templateReducer