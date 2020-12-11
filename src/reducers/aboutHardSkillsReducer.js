const initialState = {
    frontend: [],
    backend: [],
    dbs: [ ],
    other: [],
}

const aboutHardSkillsReducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'SET_FRONTEND':
            return {
                ...state,
                frontend: actions.payload
            }
        case 'SET_BACKEND' :
            return {
                ...state,
                backend: actions.payload
            }
        case 'SET_DBS' :
            return {
                ...state,
                dbs: actions.payload
            }
        case 'SET_OTHER' :
            return {
                ...state,
                other: actions.payload
            }
        default : 
        return state
    }
}


export default aboutHardSkillsReducer