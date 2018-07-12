import React from 'react';
import { shallow } from 'enzyme';
import { FavouritePosts } from '../../components/FavouritePosts';
import { dummyPosts } from '../../fixtures/dummyData';

test('should correctly render FavouritePosts widget on sidebar', () => {
  const wrapper = shallow(<FavouritePosts posts={[]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render FavouritePosts widget on sidebar with posts', () => {
  const wrapper = shallow(<FavouritePosts posts={dummyPosts}/>);
  expect(wrapper).toMatchSnapshot();
});