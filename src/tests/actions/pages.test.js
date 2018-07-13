import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { PAGES } from '../../actions/types';
import { setPages, setPagesAsync } from '../../actions/pages';
import { dummyPages as pages } from '../../fixtures/dummyData';

const createMockStore = configureMockStore([thunk]);

test('should properly set pages action object with provided pages', () => {
  const action = setPages(pages);
  expect(action).toEqual({
    type: PAGES.SET_PAGES,
    pages
  });
});

test('should correctly fetched pages from blogger api', done => {
  const store = createMockStore();
  store.dispatch(setPagesAsync()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: PAGES.SET_PAGES,
      pages
    });
    done();
  });
});