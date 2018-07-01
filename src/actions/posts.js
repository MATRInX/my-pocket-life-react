import { POSTS } from './types';
import axios from 'axios';
// Action generator

// SET_POSTS
export const setPosts = (posts = []) => ({
  type: POSTS.SET_POSTS,
  posts
});

export const setPostsAsync = () => {
  return (dispatch, getState) => {
    return axios.post('/api/get-all-posts')
    .then(response => {
      const posts = [];
      response.data.items.forEach(element => {
        posts.push({ ...element });
      });
      dispatch(setPosts(posts));
    })
    .catch(err => {
      console.log(err);
    })
  };  
};