import { combineReducers } from 'redux'
import allElementPositionActions from '../actions/elementPositionActions'
import aboutHardSkillsReducer from './aboutHardSkillsReducer'
import aboutMeReducer from './aboutMeReducer'
import aboutWorkHistoryReducer from './aboutWorkHistoryReducer'
import addTechnologyReducer from './addTechnologyReducer'
import elementPositionReducer from './elementPositionReducer'
import portfolioReducer from './portfolioReducer'
import templateReducer from './templateReducer'



export default combineReducers({
    aboutMeReducer,
    aboutWorkHistoryReducer,
    aboutHardSkillsReducer,
    portfolioReducer,
    templateReducer,
    addTechnologyReducer,
    elementPositionReducer
})