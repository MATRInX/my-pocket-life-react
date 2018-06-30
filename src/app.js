import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setPosts, setPostsAsync } from './actions/posts';
import { setMainPageIndex } from './actions/filters';
import { dummyPosts } from './fixtures/dummyData';

library.add(fab, faHome);

const store = configureStore();

//store.dispatch(setPosts(dummyPosts));
store.dispatch(setPostsAsync());
store.dispatch(setMainPageIndex(3));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
