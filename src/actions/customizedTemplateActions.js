import actions from '../constants/actionTypes'


const setHeaderBackgroundAction = (data) => ({
    type: actions.SET_HEADER_BACKGROUND,
    payload: data
})


const allCustomizedTemplateActions = {
    setHeaderBackgroundAction
}

export default allCustomizedTemplateActions