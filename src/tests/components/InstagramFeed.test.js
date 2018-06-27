import React from 'react';
import { shallow } from 'enzyme';
import InstagramFeed from '../../components/InstagramFeed';

test('should correctly render InstagramFeed widget on sidebar', () => {
  const wrapper = shallow(<InstagramFeed />);
  expect(wrapper).toMatchSnapshot();
});