import actions from '../constants/actionTypes'

const setFrontendAction = (data) => ({
    type: actions.SET_FRONTEND,
    payload: data
})

const setBackendAction = (data) => ({
    type: actions.SET_BACKEND,
    payload: data
})

const setDbsAction = (data) => ({
    type: actions.SET_DBS,
    payload: data
})

const setOtherAction = (data) => ({
    type: actions.SET_OTHER,
    payload: data
})

const allHardSkillsActions = {
    setFrontendAction,
    setBackendAction,
    setDbsAction,
    setOtherAction
}

export default allHardSkillsActions