import React from 'react';
import { shallow } from 'enzyme';
import HeaderSearch from '../../components/HeaderSearch';
import { history } from '../../routers/AppRouter';

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

test('should properly pushed new search text into current location', () => {
  const searchText = 'testing word';
  const searchUrl = `/szukaj/${searchText}`;
  const wrapper = shallow(<HeaderSearch searchText={searchText}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('queryString')).toBe('');
  expect(history.location.pathname).toBe(searchUrl);
});