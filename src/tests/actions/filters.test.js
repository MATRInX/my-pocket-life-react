import { FILTERS } from '../../actions/types';
import { 
  setMainPageIndex, 
  setSearchText, 
  setCategoryLabel, 
  setArchiveMonth, 
  setArchiveYear
} from '../../actions/filters';

test('should properly set main page index filter value', () => {
  const index = 2;
  const action = setMainPageIndex(index);
  expect(action).toEqual({
    type: FILTERS.SET_MAIN_PAGE_INDEX,
    index
  });
});

test('should properly set search text filter value', () => {
  const searchText = 'sample search text';
  const action = setSearchText(searchText);
  expect(action).toEqual({
    type: FILTERS.SET_SEARCH_TEXT,
    searchText
  });
});

test('should properly set category label filter value', () => {
  const categoryLabel = 'DIY';
  const action = setCategoryLabel(categoryLabel);
  expect(action).toEqual({
    type: FILTERS.SET_CATEGORY_LABEL,
    categoryLabel
  });
});

test('should properly set archive month filter value', () => {
  const archiveMonth = 11;
  const action = setArchiveMonth(archiveMonth);
  expect(action).toEqual({
    type: FILTERS.SET_ARCHIVE_MONTH,
    archiveMonth
  });
});

test('should properly set archive year filter value', () => {
  const archiveYear = 2018;
  const action = setArchiveYear(archiveYear);
  expect(action).toEqual({
    type: FILTERS.SET_ARCHIVE_YEAR,
    archiveYear
  });
});