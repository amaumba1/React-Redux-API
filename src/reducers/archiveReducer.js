import { STORY_ARCHIVE } from '../constants/actionTypes'

const INTIAL_STATE = []; 

const applyArchiveStory = (state, action) {
    [ ...state, action.id ]; 
}

function archiveReducer(state = INTIAL_STATE, action) {
    switch(action.type) {
        case STORY_ARCHIVE : {
            return applyArchiveStory(state, action); 
        }
        default: return state;
    }
}

export default archiveReducer; 