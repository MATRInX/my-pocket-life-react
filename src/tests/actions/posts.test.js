import { POSTS } from '../../actions/types';
import { setPosts } from '../../actions/posts';
import { dummyPosts as posts } from '../../fixtures/dummyData';

test('should properly set posts action object with provided posts', () => {
  const action = setPosts(posts);
  expect(action).toEqual({
    type: POSTS.SET_POSTS,
    posts
  });
});