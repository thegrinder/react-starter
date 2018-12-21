import React from 'react';
import { shallow } from 'enzyme';
import Test from '..';

describe('<Test/>', () => {
  it('should be defined', () => {
    const renderedComponent = shallow(<Test />);
    expect(renderedComponent).toBeDefined();
  });
});
