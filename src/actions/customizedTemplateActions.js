import actions from '../constants/actionTypes'


const setHeaderBackgroundAction = (data) => ({
    type: actions.SET_HEADER_BACKGROUND,
    payload: data
})

const setVerticalPosAction = (data) => ({
    type: actions.SET_VERTICAL_POS,
    payload: data
})

const setTextAlignAction = (data) => ({
    type: actions.SET_TEXT_ALIGN,
    payload: data
})

const setActiveBlockAction = (data) => ({
    type: actions.SET_ACTIVE_BLOCK,
    payload: data
})

const setAvaBorderRadiusAction = data => ({
    type: actions.SET_BORDER_RADIUS_AVATAR,
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

const setActiveTextTypeAction = data => ({
    type: actions.SET_ACTIVE_TEXT_TYPE,
    payload: data
})

const setTypeSizeAction = data => {
    return {
        type: actions.SET_ACTIVE_TEXT_SIZE,
        payload: data
    }
}

const setTypeColorAction = data => {
    return {
        type: actions.SET_ACTIVE_TEXT_COLOR,
        payload: data
    }
}

const setCustomTemplateUidAction = data => {
    return {
        type: actions.SET_CUSTOM_TEMPLATE_UID,
        payload: data
    }
}
    
const setAllAction = data => ({
    type: actions.SET_MAIN_STYLES,
    payload: data
})

const setMatrixAction = data => ({
    type: actions.SET_MATRIX,
    payload: data
})



const allCustomizedTemplateActions = {
    setHeaderBackgroundAction,
    setVerticalPosAction,
    setTextAlignAction,
    setAvaBorderRadiusAction,
    setActiveBlockAction,
    setBodyBackgroundAction,
    setHeaderImageAction,
    setHeaderImagePositionAction,
    setBodyImageAction,
    setBodyImagePositionAction,
    setActiveTextTypeAction,
    setTypeSizeAction,
    setTypeColorAction,
    setCustomTemplateUidAction,
    setAllAction,
    setMatrixAction,
}

export default allCustomizedTemplateActions