import React from 'react';

import { render } from 'test-utils';

import Spinner from '../Spinner';

const requiredProps = {
  color: 'black',
};

const renderComponent = (props = {}) =>
  render(<Spinner {...requiredProps} {...props} />);

describe('<Spinner />', () => {
  it('should render correctly with default props', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const {
      container: { firstChild },
    } = renderComponent({ color: 'white', sizing: 40 });
    expect(firstChild).toBeDefined();
  });

  it('should render <span> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('SPAN');
  });
});
