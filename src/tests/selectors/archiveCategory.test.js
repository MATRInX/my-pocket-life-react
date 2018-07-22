import { dummyPosts as posts } from '../../fixtures/dummyData';
import selectArchiveCategories from '../../selectors/archiveCategory';

test('should return all possible archive category items', () => {
  const archiveCategories = [
    {text: 'August 2011', year: 2011, month: 8},
    {text: 'June 2011', year: 2011, month: 6},
    {text: 'July 2011', year: 2011, month: 7}
  ];
  const selectedCategories = selectArchiveCategories(posts);
  expect(selectedCategories).toEqual(archiveCategories);
})