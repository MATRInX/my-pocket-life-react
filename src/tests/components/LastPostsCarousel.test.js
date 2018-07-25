import React from 'react';
import { shallow } from 'enzyme';
import { LastPostsCarousel } from '../../components/LastPostsCarousel';
import { dummyPosts as carouselPosts } from '../../fixtures/dummyData';

test('should correctly render LastPostsCarousel component', () => {
  const wrapper = shallow(<LastPostsCarousel carouselPosts={carouselPosts}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render loading information when there is no last posts', () => {
  const wrapper = shallow(<LastPostsCarousel carouselPosts={[]}/>);
  expect(wrapper).toMatchSnapshot();
});