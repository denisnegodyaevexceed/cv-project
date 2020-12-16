const initialState = {
    headerBackground: '#fff',
    bodyBackground: '#fff',
}

const customizedTemplateReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_HEADER_BACKGROUND':
            return{
                ...state,
                headerBackground: actions.payload
            }
        default :
            return state
    }
}

export default customizedTemplateReducer;