import React from 'react';
import { shallow } from 'enzyme';
import PostListItem from '../../components/PostListItem';
import { dummyPosts as posts } from '../../fixtures/dummyData';

test('should correctly render PostListItem', () => {
  const wrapper = shallow(<PostListItem {...posts[0]}/>);
  expect(wrapper).toMatchSnapshot();
});