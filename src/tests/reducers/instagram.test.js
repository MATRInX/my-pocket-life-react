import { INSTAGRAM } from '../../actions/types';
import instagramReducer from '../../reducers/instagram';
import { dummyInstagram as instagramData } from '../../fixtures/dummyData';

test('should set default state', () => {
  const action = { type: '@@INIT'};
  const state = instagramReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should correctly set instagramData state', () => {
  const action = { 
    type: INSTAGRAM.SET_IMAGES, 
    instagramData 
  };
  const state = instagramReducer(undefined, action);
  expect(state).toEqual(instagramData);
});