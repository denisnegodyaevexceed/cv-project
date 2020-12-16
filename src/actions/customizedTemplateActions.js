import actions from '../constants/actionTypes'

const setElementXAction = (data) => ({
    type: actions.SET_ELEMENT_X,
    payload: data
})

const setElementYAction = (data) => ({
    type: actions.SET_ELEMENT_Y,
    payload: data
})

const allCustomizedTemplateActions = {
    setElementXAction,
    setElementYAction,
}

export default allCustomizedTemplateActions