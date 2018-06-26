import { FILTERS } from '../actions/types';

const filterReducerDefaultState = {
  index: 2,
  searchText: '',
  categoryLabel: '',
  archiveYear: 0,
  archiveMonth: 0
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case FILTERS.SET_MAIN_PAGE_INDEX:
      return {
        ...state,
        index: action.index
      };
    case FILTERS.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
      };
    case FILTERS.SET_CATEGORY_LABEL:
      return {
        ...state,
        categoryLabel: action.categoryLabel
      };
    case FILTERS.SET_ARCHIVE_YEAR:
      return {
        ...state,
        archiveYear: action.archiveYear
      };
    case FILTERS.SET_ARCHIVE_MONTH:
      return {
        ...state,
        archiveMonth: action.archiveMonth
      };
    default:
      return state;
  };
};