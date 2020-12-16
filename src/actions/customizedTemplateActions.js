import actions from '../constants/actionTypes'


const setHeaderBackgroundAction = (data) => ({
    type: actions.SET_HEADER_BACKGROUND,
    payload: data
})

const setBodyBackgroundAction = (data) => ({
    type: actions.SET_BODY_BACKGROUND,
    payload: data
})


const allCustomizedTemplateActions = {
    setHeaderBackgroundAction,
    setBodyBackgroundAction
}

export default allCustomizedTemplateActions