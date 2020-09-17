import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    //gets unqiue userids
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    //fetches the unique id's only
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () =>
    async dispatch => {
        //makes a request to the posts end point (main url defined in jsonPlaceholder.js)
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
    }

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};    


    
