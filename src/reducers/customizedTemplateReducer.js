const initialState = {
    headerBackground: '#fff',
    bodyBackground: '#fff',
    headerImage: '',
    headerImagePosition: '',
}

const customizedTemplateReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_HEADER_BACKGROUND':
            return{
                ...state,
                headerBackground: actions.payload
            }
        case 'SET_BODY_BACKGROUND':
            return{
                ...state,
                bodyBackground: actions.payload
            }
        case 'SET_HEADER_IMAGE':
            return{
                ...state,
                headerImage: actions.payload
            }
        
        default :
            return state
    }
}

export default customizedTemplateReducer;