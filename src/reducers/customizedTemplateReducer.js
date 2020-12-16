const initialState = {
    headerBackground: '#fff',
    bodyBackground: '#fff',
    textAlign: 'left',
    posVertical: 'flex-start',
    activeBlock: 1,
    avaBorderRadius: '0',
}

const customizedTemplateReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_HEADER_BACKGROUND':
            return{
                ...state,
                headerBackground: actions.payload
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

        default :
            return state
    }
}

export default customizedTemplateReducer;