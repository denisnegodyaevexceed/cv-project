const initialState = {
    templateNumber: '',
    theme:'black',
}

const templateReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_TEMPLATE_NUMBER':
            return {
                ...state,
                templateNumber: actions.payload
            }
            case 'SET_THEME_LIGHT':
            return {
                ...state,
                theme:'white'
            }
            case 'SET_THEME_DARK':
            return {
                ...state,
                theme:'black'
            }
        default:
            return state    
    }
}

export default templateReducer