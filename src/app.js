import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import MainPage from './components/MainPage';
import AppRouter, { history } from './routers/AppRouter';

library.add(fab, faHome);

const jsx = (
  <AppRouter />
)

ReactDOM.render(jsx, document.getElementById('app'));
