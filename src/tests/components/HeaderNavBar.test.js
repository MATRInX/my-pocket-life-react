import React from 'react';
import { shallow } from 'enzyme';
import { HeaderNavBar } from '../../components/HeaderNavBar';

test('should correctly render HeaderNavBar', () => {
  const wrapper = shallow(<HeaderNavBar />);
  expect(wrapper).toMatchSnapshot();
});