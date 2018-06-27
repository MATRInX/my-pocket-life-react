import React from 'react';
import { shallow } from 'enzyme';
import AboutMe from '../../components/AboutMe';

test('should correctly render AboutMe widget on sidebar', () => {
  const wrapper = shallow(<AboutMe />);
  expect(wrapper).toMatchSnapshot();
});