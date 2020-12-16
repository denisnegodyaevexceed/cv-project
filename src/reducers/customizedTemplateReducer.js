const initialState = {
    headerBackground: '#fff',
    bodyBackground: '#fff',
    textAlign: 'left',
    posVertical: 'flex-start',
    activeBlock: 1,
    avaBorderRadius: '0',
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

        case 'SET_VERTICAL_POS':
            return{
                ...state,
                posVertical: actions.payload
            }

        case 'SET_TEXT_ALIGN':
            return{
                ...state,
                textAlign: actions.payload
            }

        case 'SET_BORDER_RADIUS_AVATAR':
            return{
                ...state,
                avaBorderRadius: actions.payload
            }

        case 'SET_ACTIVE_BLOCK':
            return{
                ...state,
                activeBlock: actions.payload
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