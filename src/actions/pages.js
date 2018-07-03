import { PAGES } from './types';
import axios from 'axios';
// action generator

// SET_PAGES
export const setPages = (pages = []) => ({
  type: PAGES.SET_PAGES,
  pages
});

export const setPagesAsync = () => {
  return (dispatch, getState) => {
    return axios.get('/api/get-all-pages')
    .then(response => {
      const pages = [];
      response.data.items.forEach(page => {
        pages.push({ ...page });
      });
      dispatch(setPages(pages));
    })
    .catch(err => {
      console.log(err);
    });
  }
}