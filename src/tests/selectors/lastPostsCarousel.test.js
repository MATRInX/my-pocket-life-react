import selectCarouselPosts from '../../selectors/lastPostsCarousel';
import { dummyPosts as posts } from '../../fixtures/dummyData';

test('should return only last 5 posts for carousel', () => {
  const selectedPosts = selectCarouselPosts([...posts, ...posts]);
  expect(selectedPosts.length).toBe(5);
  expect(selectedPosts).toEqual([...posts, posts[0], posts[1]]);
});