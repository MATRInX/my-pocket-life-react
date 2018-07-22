import { INSTAGRAM } from '../actions/types';
// instagram reducer
const instagramReducerDefaultState = [];

export default (state = instagramReducerDefaultState, action) => {
  switch (action.type) {
    case INSTAGRAM.SET_IMAGES:
      return action.instagramData;
    default:
      return state;
  };
};