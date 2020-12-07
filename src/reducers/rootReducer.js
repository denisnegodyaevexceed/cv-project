import { combineReducers } from 'redux'
import aboutHardSkillsReducer from './aboutHardSkillsReducer'
import aboutMeReducer from './aboutMeReducer'
import aboutWorkHistoryReducer from './aboutWorkHistoryReducer'
import portfolioReducer from './portfolioReducer'
import templateReducer from './templateReducer'




export default combineReducers({
    aboutMeReducer,
    aboutWorkHistoryReducer,
    aboutHardSkillsReducer,
    portfolioReducer,
    templateReducer
})