import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from '../../components/SubHeader';

test('should correctly render SubHeader', () => {
  const wrapper = shallow(<SubHeader />);
  expect(wrapper).toMatchSnapshot();
});