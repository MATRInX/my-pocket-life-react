import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { POSTS } from '../../actions/types';
import { setPosts, setPostsAsync } from '../../actions/posts';
import { dummyPosts as posts } from '../../fixtures/dummyData';

const createMockStore = configureMockStore([thunk]);

test('should properly set posts action object with provided posts', () => {
  const action = setPosts(posts);
  expect(action).toEqual({
    type: POSTS.SET_POSTS,
    posts
  });
});

test('should correctly set posts from blogger api', done => {
  const store = createMockStore({});

  return store.dispatch(setPostsAsync()).then(()=> {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ 
      type: POSTS.SET_POSTS,
      posts
    });
    done();
  });
});