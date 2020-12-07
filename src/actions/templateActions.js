import actions from '../constants/actionTypes'

const setTemplateAction = (data) => ({
    type: actions.SET_TEMPLATE_NUMBER,
    payload: data
})

const allTemplateActions = {
    setTemplateAction
}

export default allTemplateActions