import actions from '../constants/actionTypes'


const setFrontendTechnologyAction = (data) => ({
    type: actions.SET_FRONTEND_TECHONOLOGY,
    payload: data
})

const addTechnologyAction = (frontendTech, techList) =>{
    console.log('TH' , techList)
    console.log('T!' , frontendTech)
    let arr = [...techList]
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
    addTechnologyAction
}

export default allTechnologyActions