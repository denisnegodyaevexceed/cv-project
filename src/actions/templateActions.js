import actions from '../constants/actionTypes'

const setTemplateAction = (data) => ({
    type: actions.SET_TEMPLATE_NUMBER,
    payload: data
})
const setThemeDark = () =>({
    type:actions.SET_THEME_DARK,
    
})
const setThemeLight = () =>({
    type:actions.SET_THEME_LIGHT,
    
})

const setCheckedA = (data) => ({
    type: actions.SET_CHECKED_A,
    payload: data
})

const allTemplateActions = {
    setTemplateAction,
    setThemeDark,
    setThemeLight,
    setCheckedA
}


export default allTemplateActions