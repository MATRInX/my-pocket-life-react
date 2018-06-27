import React from 'react';
import { shallow } from 'enzyme';
import SubHeaderLogo from '../../components/SubHeaderLogo';

test('should correctly render SubHeaderLogo', () => {
  const wrapper = shallow(<SubHeaderLogo />);
  expect(wrapper).toMatchSnapshot();
});