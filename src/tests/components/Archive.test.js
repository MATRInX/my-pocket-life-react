import React from 'react';
import { shallow } from 'enzyme';
import { Archive } from '../../components/Archive';
import { dummyPosts } from '../../fixtures/dummyData';
import { history } from '../../routers/AppRouter';

test('should correctly render Archive widget on sidebar', () => {
  const wrapper = shallow(<Archive archiveData={dummyPosts}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render Archive widget on sidebar with no archive data', () => {
  const wrapper = shallow(<Archive archiveData={[]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly set default selectValue', () => {
  const defaultSelectValue = '0|0';
  const wrapper = shallow(<Archive archiveData={[]}/>);
  expect(wrapper.state('selectValue')).toBe(defaultSelectValue);
});

test('should correctly set selectValue if it is different than filters value', () => {
  const selectValue = '4|2016';
  const filtersValue = '5|2017';
  const filters = { filtersValue };
  const setPostsFilterSpy = jest.fn();
  const wrapper = shallow(<Archive 
    archiveData={dummyPosts} 
    filters={filters} 
    selectValue={selectValue}
    setPostsFilter={setPostsFilterSpy}
    />);
  expect(setPostsFilterSpy).toHaveBeenCalledWith(selectValue);
});

test('should set properly location after select archive month', () => {
  const month = '4';
  const year = '2018';
  const value = `${month}|${year}`;
  const url = `/archiwum/${year}/${month}`;
  const setPostsFilterSpy = jest.fn();
  const wrapper = shallow(<Archive archiveData={dummyPosts} setPostsFilter={setPostsFilterSpy}/>);
  wrapper.find('select').simulate('change', {
    target : { value }
  });
  expect(wrapper.state('selectValue')).toBe(value);
  expect(history.location.pathname).toBe(url);
  expect(setPostsFilterSpy).toHaveBeenCalledWith(value);
});