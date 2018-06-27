import React from 'react';
import { shallow } from 'enzyme';
import SubHeaderNavBar from '../../components/SubHeaderNavBar';

test('should correctly render SubHeaderNavBar', () => {
  const wrapper = shallow(<SubHeaderNavBar />);
  expect(wrapper).toMatchSnapshot();
});