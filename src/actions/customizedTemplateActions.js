import actions from '../constants/actionTypes'


const setHeaderBackgroundAction = (data) => ({
    type: actions.SET_HEADER_BACKGROUND,
    payload: data
})



const setHeaderImageAction = (url, value) => ({
    type: actions.SET_HEADER_IMAGE,
    payload: {
        url,
        value
    }
})

const setHeaderImagePositionAction = (data) => ({
    type: actions.SET_HEADER_IMAGE_POSITION,
    payload: data
})

const setBodyBackgroundAction = (data) => ({
    type: actions.SET_BODY_BACKGROUND,
    payload: data
})

const setBodyImageAction = (url, value) => ({
    type: actions.SET_BODY_IMAGE,
    payload: {
        url,
        value
    }
})

const setBodyImagePositionAction = (data) => {
    
    return {type: actions.SET_BODY_IMAGE_POSITION,
    payload: data}
}




const allCustomizedTemplateActions = {
    setHeaderBackgroundAction,
    setBodyBackgroundAction,
    setHeaderImageAction,
    setHeaderImagePositionAction,
    setBodyImageAction,
    setBodyImagePositionAction
}

export default allCustomizedTemplateActions