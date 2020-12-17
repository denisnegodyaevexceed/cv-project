const initialState = {
    headerBackground: '#fff',
    headerImage: null,
    headerImagePosition: 'cover',
    headerImageValue: '',
    bodyBackground: '#fff',
    bodyImage: null,
    bodyImagePosition: 'cover',
    bodyImageValue: '',
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
                    headerImagePosition: actions.payload,
                    
                }
                case 'SET_BODY_BACKGROUND':
            return{
                ...state,
                bodyBackground: actions.payload,
                bodyImage: '',
                bodyImageValue: ''
            }
                case 'SET_BODY_IMAGE_POSITION':
                return{
                    ...state,
                    bodyImagePosition: actions.payload
                }
                case 'SET_BODY_IMAGE':
            return{
                ...state,
                bodyImage: actions.payload.url,
                bodyBackground: '',
                bodyImageValue: actions.payload.value
            }
        default :
            return state
    }
}

export default customizedTemplateReducer;