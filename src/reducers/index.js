import { combineReducers } from 'redux';
import storyReducer from './storyReducer'; 
import archiveReducer from './archiveReducer';

const rootReducer = combineReducers({
    storyState: storyReducer,
    archiveState: archiveReducer
})

export default rootReducer; 