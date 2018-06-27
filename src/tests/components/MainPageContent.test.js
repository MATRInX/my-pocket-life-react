import React from 'react';
import { shallow } from 'enzyme';
import MainPageContent from '../../components/MainPageContent';

test('should correctly render MainPageContent', () => {
  const wrapper = shallow(<MainPageContent />);
  expect(wrapper).toMatchSnapshot();
});