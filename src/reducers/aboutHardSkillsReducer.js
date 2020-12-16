const initialState = {
    frontend: [ { title: 'Cassandra' },
    { title: 'Microsoft SQL' },
    { title: 'CouchDB' },
    { title: 'Oracle' },],
    backend: [ { title: 'Cassandra' },
    { title: 'Microsoft SQL' },
    { title: 'CouchDB' },
    { title: 'Oracle' },],
    dbs: [  { title: 'Cassandra' },
    { title: 'Microsoft SQL' },
    { title: 'CouchDB' },
    { title: 'Oracle' },],
    other: [ { title: 'Cassandra' },
    { title: 'Microsoft SQL' },
    { title: 'CouchDB' },
    { title: 'Oracle' },],
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