import { dummyPages as pages } from '../../fixtures/dummyData';
import selectAboutMePage from '../../selectors/aboutMePage';

test('should return only contact page', () => {
  const selectedPage = selectAboutMePage(pages);
  expect(selectedPage).toEqual(pages[0]);
});