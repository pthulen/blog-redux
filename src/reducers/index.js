import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import photoReducer from './photoReducer';


export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    photos: photoReducer
});