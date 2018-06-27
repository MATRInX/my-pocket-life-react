import React from 'react';
import { shallow } from 'enzyme';
import SearchPageContent from '../../components/SearchPageContent';

let wrapper, queryString, match;

beforeEach(() => {
  queryString = 'tekst';
  match = {
    params: {
      queryString
    }
  };
  wrapper = shallow(<SearchPageContent match={match}/>);
})

test('should correctly render SearchPageContent', () => {  
  expect(wrapper).toMatchSnapshot();
});

test('should correctly show typed search word', () => {
  const categoryNode = wrapper.find('p');
  expect(categoryNode.text()).toEqual(queryString);
});