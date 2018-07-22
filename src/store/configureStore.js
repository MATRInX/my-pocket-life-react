import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';
import pagesReducer from '../reducers/pages';
import instagramReducer from '../reducers/instagram';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store creation
export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      pages: pagesReducer,
      filters: filtersReducer,
      instagram: instagramReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};