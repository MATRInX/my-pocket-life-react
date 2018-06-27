import React from 'react';
import { shallow } from 'enzyme';
import AboutMePageContent from '../../components/AboutMePageContent';

test('should correctly render AboutMePageContent content', () => {
  const wrapper = shallow(<AboutMePageContent />);
  expect(wrapper).toMatchSnapshot();
});