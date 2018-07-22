import { dummyPosts as posts } from '../../fixtures/dummyData';
import selectFavouritePosts from '../../selectors/favouritePosts';

test('should return only favourite posts', () => {
  const selectedPosts = selectFavouritePosts(posts);
  expect(selectedPosts).toEqual([posts[1]]);
});