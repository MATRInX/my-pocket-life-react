import React from 'react';
import { shallow } from 'enzyme';
import ArchivePageContent from '../../components/ArchivePageContent';

test('should correctly render ArchivePageContent', () => {
  const match = {
    params: {
      month: 8,
      year: 2011
    }
  };
  const wrapper = shallow(<ArchivePageContent match={match}/>);
  expect(wrapper).toMatchSnapshot();
});