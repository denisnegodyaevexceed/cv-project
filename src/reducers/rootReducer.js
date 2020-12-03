import { combineReducers } from 'redux'
import aboutMeReducer from './aboutMeReducer'
import aboutWorkHistoryReducer from './aboutWorkHistoryReducer'



export default combineReducers({
    aboutMeReducer,
    aboutWorkHistoryReducer
})