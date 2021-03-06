import { FILTERS } from './types';
// Action generator

// SET_MAIN_PAGE_INDEX
export const setMainPageIndex = index => ({
  type: FILTERS.SET_MAIN_PAGE_INDEX,
  index
});

// SET_POST_FILTERS
export const setPostsFilters = (filterType, filterValue) => ({
  type: FILTERS.SET_POSTS_FILTER,
  filterType,
  filterValue
})

// SET_SEARCH_TEXT
export const setSearchText = searchText => ({
  type: FILTERS.SET_SEARCH_TEXT,
  searchText
});

// SET_CATEGORY_LABEL
export const setCategoryLabel = categoryLabel => ({
  type: FILTERS.SET_CATEGORY_LABEL,
  categoryLabel
});

// SET_ARCHIVE_MONTH
export const setArchiveMonth = archiveMonth => ({
  type: FILTERS.SET_ARCHIVE_MONTH,
  archiveMonth
});

// SET_ARCHIVE_YEAR
export const setArchiveYear = archiveYear => ({
  type: FILTERS.SET_ARCHIVE_YEAR,
  archiveYear
});