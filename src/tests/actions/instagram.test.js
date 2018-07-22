import { INSTAGRAM } from '../../actions/types';
import { setImages } from '../../actions/instagram';
import { dummyInstagram as instagramData } from '../../fixtures/dummyData';

test('should correctly return action generator object', () => {
  const action = setImages(instagramData);
  expect(action).toEqual({
    type: INSTAGRAM.SET_IMAGES,
    instagramData
  });
});