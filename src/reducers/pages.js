import { PAGES } from '../actions/types';
// Pages reducer
const pagesReducerDefaultState = [];

export default (state = pagesReducerDefaultState, action) => {
  switch (action.type) {
    case PAGES.SET_PAGES:
      return action.pages;
    default:
      return state;
  };
};