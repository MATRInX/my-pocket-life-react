import React from 'react';
import { shallow } from 'enzyme';
import HeaderSearch from '../../components/HeaderSearch';

test('should correctly render HeaderSearch', () => {
  const wrapper = shallow(<HeaderSearch />);
  expect(wrapper).toMatchSnapshot();
});

test('should set search text on input change', () => {
  const value = 'Typed value';
  const wrapper = shallow(<HeaderSearch />);
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value
    }
  });
  expect(wrapper.state('queryString')).toBe(value);
});