import React from 'react';
import { shallow } from 'enzyme';
import Archive from '../../components/Archive';

test('should correctly render Archive widget on sidebar', () => {
  const wrapper = shallow(<Archive />);
  expect(wrapper).toMatchSnapshot();
});