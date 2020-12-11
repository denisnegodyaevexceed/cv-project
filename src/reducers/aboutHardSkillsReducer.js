const initialState = {
    frontend: [ { title: 'XSLT' },
    { title: 'XQuery' },
    { title: 'yacc' },
    { title: 'Yorick' },],
    backend: [{ title: 'XSLT' },
    { title: 'XQuery' },
    { title: 'yacc' },
    { title: 'Yorick' },],
    dbs: [ { title: 'XSLT' },
    { title: 'XQuery' },
    { title: 'yacc' },
    { title: 'Yorick' },],
    other: [{ title: 'XSLT' },
    { title: 'XQuery' },
    { title: 'yacc' },
    { title: 'Yorick' },],
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