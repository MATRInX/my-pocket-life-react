import React from 'react';
import { shallow } from 'enzyme';
import MainSidebar from '../../components/MainSidebar';

test('should correctly render MainSidebar', () => {
  const wrapper = shallow(<MainSidebar />);
  expect(wrapper).toMatchSnapshot();
});