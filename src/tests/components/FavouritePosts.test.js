import React from 'react';
import { shallow } from 'enzyme';
import FavouritePosts from '../../components/FavouritePosts';

test('should correctly render FavouritePosts widget on sidebar', () => {
  const wrapper = shallow(<FavouritePosts />);
  expect(wrapper).toMatchSnapshot();
});