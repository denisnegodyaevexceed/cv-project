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

const allTemplateActions = {
    setTemplateAction,
    setThemeDark,
    setThemeLight
    
}


export default allTemplateActions