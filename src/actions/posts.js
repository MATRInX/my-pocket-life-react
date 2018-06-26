import { POSTS } from './types';
// Action generator

// SET_POSTS
export const setPosts = posts => ({
  type: POSTS.SET_POSTS,
  posts
});