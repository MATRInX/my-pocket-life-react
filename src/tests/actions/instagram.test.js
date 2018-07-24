import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { INSTAGRAM } from '../../actions/types';
import { setImages, setImagesAsync } from '../../actions/instagram';
import { dummyInstagram as instagramData } from '../../fixtures/dummyData';

const createMockStore = configureMockStore([thunk]);

test('should correctly return action generator object', () => {
  const action = setImages(instagramData);
  expect(action).toEqual({
    type: INSTAGRAM.SET_IMAGES,
    instagramData
  });
});

test('should correctly fetched instagram data from instagram api', done => {
  const store = createMockStore();
  store.dispatch(setImagesAsync()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: INSTAGRAM.SET_IMAGES,
      instagramData
    });
    done();
  })
});