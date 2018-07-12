import { FILTERS } from '../../actions/types';
import filtersReducer from '../../reducers/filters';

test('should set default state', () => {
  const action = { type: '@@INIT'};
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    index: 2,
    filterType: '',
    filterValue: '',
    searchText: '',
    categoryLabel: '',
    archiveYear: 0,
    archiveMonth: 0
  });
});

test('should set main page index state', () => {
  const index = 5;
  const action = {
    type: FILTERS.SET_MAIN_PAGE_INDEX,
    index
  };
  const state = filtersReducer(undefined, action);
  expect(state.index).toBe(index);
});

test('should set search text state', () => {
  const searchText = 'Sample text';
  const action = {
    type: FILTERS.SET_SEARCH_TEXT,
    searchText
  };
  const state = filtersReducer(undefined, action);
  expect(state.searchText).toBe(searchText);
});

test('should set category label state', () => {
  const categoryLabel = 'DIY';
  const action = {
    type: FILTERS.SET_CATEGORY_LABEL,
    categoryLabel
  };
  const state = filtersReducer(undefined, action);
  expect(state.categoryLabel).toBe(categoryLabel);
});

test('should set archive month state', () => {
  const archiveMonth = 3;
  const action = {
    type: FILTERS.SET_ARCHIVE_MONTH,
    archiveMonth
  };
  const state = filtersReducer(undefined, action);
  expect(state.archiveMonth).toBe(archiveMonth);
});

test('should set archive year state', () => {
  const archiveYear = 2017;
  const action = {
    type: FILTERS.SET_ARCHIVE_YEAR,
    archiveYear
  };
  const state = filtersReducer(undefined, action);
  expect(state.archiveYear).toBe(archiveYear);
});