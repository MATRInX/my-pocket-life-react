import React from 'react';
import { shallow } from 'enzyme';
import ContactPageContent from '../../components/ContactPageContent';

test('should correctly render ContactPageContent', () => {
  const wrapper = shallow(<ContactPageContent />);
  expect(wrapper).toMatchSnapshot();
});