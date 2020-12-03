import { combineReducers } from 'redux'
import aboutHardSkillsReducer from './aboutHardSkillsReducer'
import aboutMeReducer from './aboutMeReducer'
import aboutWorkHistoryReducer from './aboutWorkHistoryReducer'




export default combineReducers({
    aboutMeReducer,
    aboutWorkHistoryReducer,
    aboutHardSkillsReducer
})