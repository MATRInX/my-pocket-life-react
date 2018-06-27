import React from 'react';
import { shallow } from 'enzyme';
import FacebookFanpage from '../../components/FacebookFanpage';

test('should correctly render FacebookFanpage widget on sidebar', () => {
  const wrapper = shallow(<FacebookFanpage />);
  expect(wrapper).toMatchSnapshot();
});