import { dummyPages as pages } from '../../fixtures/dummyData';
import selectContactPage from '../../selectors/contactPage';

test('should return only contact page', () => {
  const selectedPage = selectContactPage(pages);
  expect(selectedPage).toEqual(pages[1]);
});