import { POSTS } from '../../actions/types';
import { dummyPosts as posts } from '../../fixtures/dummyData';
import postsReducer from '../../reducers/posts';

test('should set default state', () => {
  const action = { type: '@@INIT'};
  const state = postsReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should set posts state', () => {
  const action = {
    type: POSTS.SET_POSTS,
    posts
  };
  const state = postsReducer(undefined, action);
  expect(state).toEqual(posts);
});