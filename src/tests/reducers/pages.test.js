import { PAGES } from '../../actions/types';
import { dummyPages as pages } from '../../fixtures/dummyData';
import pagesReducer from '../../reducers/pages';

test('should set default state', () => {
  const action = { type: '@@INIT'};
  const state = pagesReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should set pages state', () => {
  const action = {
    type: PAGES.SET_PAGES,
    pages
  };
  const state = pagesReducer(undefined, action);
  expect(state).toEqual(pages);
});