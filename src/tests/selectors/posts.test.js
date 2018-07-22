import { FILTER_TYPE } from '../../actions/types';
import { dummyPosts } from '../../fixtures/dummyData';
import selectPostsByFilter from '../../selectors/posts';

test('should return posts containing search term in title or content', () => {
  const filters = {
    index: 5,
    filterType: FILTER_TYPE.SEARCH,
    filterValue: 'title1'
  };
  const selectedPosts = selectPostsByFilter(dummyPosts, filters);
  expect(selectedPosts).toEqual([dummyPosts[0], dummyPosts[2]]);
});

test('should return no posts when search term is not in any posts', () => {
  const filters = {
    index: 5,
    filterType: FILTER_TYPE.SEARCH,
    filterValue: 'expo'
  };
  const selectedPosts = selectPostsByFilter(dummyPosts, filters);
  expect(selectedPosts).toEqual([]);
});

test('should return only one post with search term in title or content', () => {
  const filters = {
    index: 1,
    filterType: FILTER_TYPE.SEARCH,
    filterValue: 'content'
  };
  const selectedPosts = selectPostsByFilter(dummyPosts, filters);
  expect(selectedPosts).toEqual([dummyPosts[0]]);
});

test('should return posts with filterValue category', () => {
  const filters = {
    index: 5,
    filterType: FILTER_TYPE.CATEGORY,
    filterValue: 'News'
  };
  const selectedPosts = selectPostsByFilter(dummyPosts, filters);
  expect(selectedPosts).toEqual([dummyPosts[0], dummyPosts[1]]);
});

test('should return post with archive time filter', () => {
  const filters = {
    index: 5,
    filterType: FILTER_TYPE.ARCHIVE,
    filterValue: '06|2011'
  };  
  const selectedPosts = selectPostsByFilter(dummyPosts, filters);
  expect(selectedPosts).toEqual([dummyPosts[1]]);
});