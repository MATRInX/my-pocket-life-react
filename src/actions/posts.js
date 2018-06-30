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
    return axios.get('/api/get-all-posts')
    .then(response => {
      //console.log('odpowiedz z backendu: ', response.data);
      const posts = [];

      response.data.items.forEach(element => {
        posts.push({ 
          id: element.id,
          published: element.published,
          url: element.url,
          content: element.content,
          title: element.title,
          image: element.images[0].url
        });
      });
      console.log(posts);
      dispatch(setPosts(posts));
    })
    .catch(err => {
      console.log(err);
    })
  };  
};