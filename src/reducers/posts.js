import { POSTS } from '../actions/types';
// Posts reducer
const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case POSTS.SET_POSTS:
      return action.posts;
    default:
      return state;
  };
};