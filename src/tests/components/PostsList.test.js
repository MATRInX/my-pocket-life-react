import React from 'react';
import { shallow } from 'enzyme';
import { PostList } from '../../components/PostsList';
import { dummyPosts as posts } from '../../fixtures/dummyData';

test('should correctly render PostsList component', () => {
  const wrapper = shallow(<PostList posts={posts} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render PostsList components with no posts', () => {
  const wrapper = shallow(<PostList posts={[]} />);
  expect(wrapper).toMatchSnapshot();
});