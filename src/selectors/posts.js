import { FILTER_TYPE } from '../actions/types';
import moment from 'moment';

export default (posts, { index, filterType, filterValue } = filters) => {
  return posts.filter((singlePost, postIndex) => {
    switch (filterType) {
      case FILTER_TYPE.SEARCH:
        const searchTitle = singlePost.title.toLowerCase().includes(filterValue.toLowerCase());
        const searchContent = singlePost.content.toLowerCase().includes(filterValue.toLowerCase());
        return searchTitle || searchContent;
      case FILTER_TYPE.CATEGORY:
        let isSelectedCategory = false;
        singlePost.labels.forEach(label => {
          if (!isSelectedCategory && label === filterValue) {
            isSelectedCategory = true;
          }
        });
        return isSelectedCategory;
      case FILTER_TYPE.ARCHIVE:
        const monthYear = filterValue.split('|');
        const month = Number(monthYear[0]);
        const year = Number(monthYear[1]);
        const postYear = moment(singlePost.published).year();
        const postMonth = moment(singlePost.published).month() + 1;
        return month === postMonth && year === postYear;
      default:
        return true;
    }
  }).filter((singlePost, postIndex) => {
    const indexLowerThanFilter = postIndex < index;
    return indexLowerThanFilter;
  });
}