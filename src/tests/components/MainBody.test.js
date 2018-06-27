import React from 'react';
import { shallow } from 'enzyme';
import { MainBody } from '../../components/MainBody';
import { dummyPosts } from '../../fixtures/dummyData';

test('should correctly render MainBody with no posts', () => {
  const wrapper = shallow(<MainBody posts={[]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render MainBody with dummy posts data', () => {
  const wrapper = shallow(<MainBody posts={dummyPosts}/>);
  expect(wrapper).toMatchSnapshot();
});