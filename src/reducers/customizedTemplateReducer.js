const initialState = {
    headerBackground: '#fff',
    bodyBackground: '#fff',
    textAlign: 'left',
    posVertical: 'flex-start',
    activeBlock: 1,
    avaBorderRadius: '0',
    headerImage: null,
    headerImagePosition: 'cover',
    headerImageValue: '',
    bodyBackground: '#fff',
    bodyImage: null,
    bodyImagePosition: 'cover',
    bodyImageValue: '',
    activeTextType: 'nameSize',
    nameSize: 40,
    posSize: 24,
    titleSize: 21,
    subTitleSize: 19,
    textSize: 15,
    smallTextSize: 12,

    nameColor: '#333',
    posColor: '#333',
    titleColor: '#333',
    subTitleColor: '#aa1060',
    textColor: '#aa1060',
    smallTextColor: '#aa1060',
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
                bodyBackground: actions.payload,
                bodyImage: '',
                bodyImageValue: ''
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

        case 'SET_ACTIVE_TEXT_TYPE':
                return{
                    ...state,
                    activeTextType: actions.payload
                }

        case 'SET_ACTIVE_TEXT_SIZE':
            return{
                ...state,
                nameSize: actions.payload.name === 'nameSize' ? actions.payload.value : state.nameSize,
                posSize: actions.payload.name === 'posSize' ? actions.payload.value : state.posSize,
                titleSize: actions.payload.name === 'titleSize' ? actions.payload.value : state.titleSize,
                subTitleSize: actions.payload.name === 'subTitleSize' ? actions.payload.value : state.subTitleSize,
                textSize: actions.payload.name === 'textSize' ? actions.payload.value : state.textSize,
                smallTextSize: actions.payload.name === 'smallTextSize' ? actions.payload.value : state.smallTextSize,
            }

        case 'SET_ACTIVE_TEXT_COLOR':
         console.log(actions.payload)
            return{
                ...state,
                nameColor: actions.payload.name === 'nameSize' ? actions.payload.value : state.nameColor,
                posColor: actions.payload.name === 'posSize' ? actions.payload.value : state.posColor,
                titleColor: actions.payload.name === 'titleSize' ? actions.payload.value : state.titleColor,
                subTitleColor: actions.payload.name === 'subTitleSize' ? actions.payload.value : state.subTitleColor,
                textColor: actions.payload.name === 'textSize' ? actions.payload.value : state.textColor,
                smallTextColor: actions.payload.name === 'smallTextSize' ? actions.payload.value : state.smallTextColor,
            }

        default :
            return state
    }
}

export default customizedTemplateReducer;