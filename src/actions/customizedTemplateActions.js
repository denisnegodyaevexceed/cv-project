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

const setBodyBackgroundAction = (data) => ({
    type: actions.SET_BODY_BACKGROUND,
    payload: data
})

const setHeaderImageAction = (url, value) => ({
    type: actions.SET_HEADER_IMAGE,
    payload: {
        url,
        value
    }
})

const setHeaderImagePosition = (data) => ({
    type: actions.SET_HEADER_IMAGE_POSITION,
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
    setHeaderImagePosition
}

export default allCustomizedTemplateActions