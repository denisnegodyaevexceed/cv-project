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

const addTechnologyAction = (frontendTech, techList, alltech) =>{
    console.log('TH' , techList)
    console.log('T!' , frontendTech)
    let arr = [...techList]

    // let correctTech = arr.find(function(element){
    //     console.log(element, 'element')
    //     if(arr.length>0){return element.title.toLowerCase()!=frontendTech.toLowerCase()}
    // })

    // if(!correctTech){arr.push({title: frontendTech})}
    
    
    arr.push({title: frontendTech})
    
    
    return({
        type: actions.ADD_YOUR_TECHNOLOGY,
        payload: arr
    })
}
//     {
//     type: actions.ADD_YOUR_TECHNOLOGY,
//     payload: techList.push({title: tech})
// }
// )

const allTechnologyActions = {
    setFrontendTechnologyAction,
    setBackendTechnologyAction,
    setDbsTechnologyAction,
    setOtherTechnologyAction,
    addTechnologyAction
}

export default allTechnologyActions