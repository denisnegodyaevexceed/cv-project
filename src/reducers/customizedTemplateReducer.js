const initialState = {
    headerBackground: '#fff',
    bodyBackground: '#fff',
    headerImage: null,
    headerImagePosition: 'cover',
    headerImageValue: ''
}

const customizedTemplateReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_HEADER_BACKGROUND':
            return{
                ...state,
                headerBackground: actions.payload,
                headerImage: '',
                headerImageValue: ''
            }
        case 'SET_BODY_BACKGROUND':
            return{
                ...state,
                bodyBackground: actions.payload
            }
        case 'SET_HEADER_IMAGE':
            return{
                ...state,
                headerImage: actions.payload.url,
                headerBackground: '',
                headerImageValue: actions.payload.value
            }
            case 'SET_HEADER_IMAGE_POSITION':
                return{
                    ...state,
                    headerImagePosition: actions.payload
                }
        default :
            return state
    }
}

export default customizedTemplateReducer;