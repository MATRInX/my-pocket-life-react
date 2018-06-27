import React from 'react';
import { shallow } from 'enzyme';
import CategoryPageContent from '../../components/CategoryPageContent';

let wrapper, category, match;

beforeEach(() => {
  category = 'DIY';
  match = {
    params: {
      category
    }
  };
  wrapper = shallow(<CategoryPageContent match={match}/>);
})

test('should correctly render CategoryPageContent', () => {  
  expect(wrapper).toMatchSnapshot();
});

test('should correctly show selected category', () => {
  const categoryNode = wrapper.find('p');
  expect(categoryNode.text()).toEqual(category);
});