import React from 'react';
import { shallow } from 'enzyme';
import { AboutMe } from '../../components/AboutMe';
import { dummyPosts } from '../../fixtures/dummyData';

test('should correctly render AboutMe widget on sidebar', () => {
  const wrapper = shallow(<AboutMe />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render AboutMe widget content', () => {
  const wrapper = shallow(<AboutMe aboutMePage={dummyPosts[0]}/>);
  expect(wrapper).toMatchSnapshot();
});