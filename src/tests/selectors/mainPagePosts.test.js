import selectMainPagePosts from '../../selectors/mainPagePosts';
import { dummyPosts } from '../../fixtures/dummyData';

test('should select only two first posts', () => {
  const filters = { index: 2};
  const selectedPosts = selectMainPagePosts(dummyPosts, filters);
  expect(selectedPosts).toEqual([dummyPosts[0], dummyPosts[1]]);
});