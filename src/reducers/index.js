import { combineReducers } from 'redux';

// reducers
import RecentPostsReducer from './RecentPostsReducer';

// combining all reducer into one store
const rootReducer = combineReducers({
    reducedRecentPosts : RecentPostsReducer
});

export default rootReducer;
