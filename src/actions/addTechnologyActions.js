import actions from '../constants/actionTypes'


const setFrontendTechnologyAction = (data) => ({
    type: actions.SET_FRONTEND_TECHONOLOGY,
    payload: data
})

const setBackendTechnologyAction = (data) => ({
    type: actions.SET_BACKEND_TECHNOLOGY,
    payload: data
})

const setDbsTechnologyAction = (data) => ({
    type: actions.SET_DBS_TECHNOLOGY,
    payload: data
})

const setOtherTechnologyAction = (data) => ({
    type: actions.SET_OTHER_TECHNOLOGY,
    payload: data
})

const setClearTechnologiesAction = () => ({
    type: actions.SET_CLEAR_TECHNOLOGIES
})



const addTechnologyAction = (frontendTech, techList, alltech) =>{
    console.log('TH' , techList)
    console.log('T!' , frontendTech)
    let arr = [...techList]

  
    
    
    arr.push({title: frontendTech})
    
    
    return({
        type: actions.ADD_YOUR_TECHNOLOGY,
        payload: arr
    })
}


const allTechnologyActions = {
    setFrontendTechnologyAction,
    setBackendTechnologyAction,
    setDbsTechnologyAction,
    setOtherTechnologyAction,
    addTechnologyAction,
    setClearTechnologiesAction,
}

export default allTechnologyActions