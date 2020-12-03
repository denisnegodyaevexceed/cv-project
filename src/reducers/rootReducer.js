import { combineReducers } from 'redux'
import aboutHardSkillsReducer from './aboutHardSkillsReducer'
import aboutMeReducer from './aboutMeReducer'
import aboutWorkHistoryReducer from './aboutWorkHistoryReducer'
import portfolioReducer from './portfolioReducer'




export default combineReducers({
    aboutMeReducer,
    aboutWorkHistoryReducer,
    aboutHardSkillsReducer,
    portfolioReducer
})