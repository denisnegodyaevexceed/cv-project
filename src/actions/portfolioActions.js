import actions from '../constants/actionTypes'



const setFirstProjectName = (data) =>({
    type: actions.SET_FIRSTPROJECT_NAME,
    payload: data
})

const setFirstProjectLink = (data) =>({
    type: actions.SET_FIRSTPROJECT_LINK,
    payload: data
})

const setFirstProjectSummary = (data) =>({
    type: actions.SET_FIRSTPROJECT_SUMMARY,
    payload: data
})

const setFirstProjectWhatYouDo = (data) =>({
    type: actions.SET_FIRSTPROJECT_WHATYOUDO,
    payload: data
})

const setFirstProjectStack = (data) =>({
    type: actions.SET_FIRSTPROJECT_STACK,
    payload: data
})

const setSecondProjectName = (data) =>({
    type: actions.SET_SECONDPROJECT_NAME,
    payload: data
})

const setSecondProjectLink = (data) =>({
    type: actions.SET_SECONDPROJECT_LINK,
    payload: data
})

const setSecondProjectSummary = (data) =>({
    type: actions.SET_SECONDPROJECT_SUMMARY,
    payload: data
})

const setSecondProjectWhatYouDo = (data) =>({
    type: actions.SET_SECONDPROJECT_WHATYOUDO,
    payload: data
})

const setSecondProjectStack = (data) =>({
    type: actions.SET_SECONDPROJECT_STACK,
    payload: data
})

const setThirdProjectName = (data) =>({
    type: actions.SET_THIRDPROJECT_NAME,
    payload: data
})

const setThirdProjectLink = (data) =>({
    type: actions.SET_THIRDPROJECT_LINK,
    payload: data
})

const setThirdProjectSummary = (data) =>({
    type: actions.SET_THIRDPROJECT_SUMMARY,
    payload: data
})

const setThirdProjectWhatYouDo = (data) =>({
    type: actions.SET_THIRDPROJECT_WHATYOUDO,
    payload: data
})

const setThirdProjectStack = (data) =>({
    type: actions.SET_THIRDPROJECT_STACK,
    payload: data
})

const setFourthProjectName = (data) =>({
    type: actions.SET_FOURTHPROJECT_NAME,
    payload: data
})

const setFourthProjectLink = (data) =>({
    type: actions.SET_FOURTHPROJECT_LINK,
    payload: data
})

const setFourthProjectSummary = (data) =>({
    type: actions.SET_FOURTHPROJECT_SUMMARY,
    payload: data
})

const setFourthProjectWhatYouDo = (data) =>({
    type: actions.SET_FOURTHPROJECT_WHATYOUDO,
    payload: data
})

const setFourthProjectStack = (data) =>({
    type: actions.SET_FOURTHPROJECT_STACK,
    payload: data
})

const allPortfolioActions = {
    setFirstProjectName,
    setFirstProjectLink,
    setFirstProjectSummary,
    setFirstProjectWhatYouDo,
    setFirstProjectStack,

    setSecondProjectName,
    setSecondProjectLink,
    setSecondProjectSummary,
    setSecondProjectWhatYouDo,
    setSecondProjectStack,

    setThirdProjectName,
    setThirdProjectLink,
    setThirdProjectSummary,
    setThirdProjectWhatYouDo,
    setThirdProjectStack,

    setFourthProjectName,
    setFourthProjectLink,
    setFourthProjectSummary,
    setFourthProjectWhatYouDo,
    setFourthProjectStack
}

export default allPortfolioActions