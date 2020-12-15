const initialState = {
    top: 0,
    left: 0,
}

const elementPositionReducer = (state=initialState, actions) => {
    switch(actions.type){
        case 'SET_ELEMENT_X':
            return{
                ...state,
                left: actions.payload
            }
        case 'SET_ELEMENT_Y':
            return{
                ...state,
                top: actions.payload
            }
        default :
            return state
    }
}

export default elementPositionReducer;