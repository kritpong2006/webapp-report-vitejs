import * as React from 'react';
import { shallow } from 'enzyme';
import FormExpCoverPage from './FormExpCoverPage';

describe('FormExpCoverPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FormExpCoverPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
