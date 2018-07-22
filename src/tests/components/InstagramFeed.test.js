import React from 'react';
import { shallow } from 'enzyme';
import { InstagramFeed } from '../../components/InstagramFeed';
import { dummyInstagram as instagramData } from '../../fixtures/dummyData';

test('should correctly render InstagramFeed widget on sidebar', () => {
  const wrapper = shallow(<InstagramFeed instagramData={instagramData}/>);
  expect(wrapper).toMatchSnapshot();
});