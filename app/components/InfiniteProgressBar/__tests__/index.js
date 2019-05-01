import React from 'react';

import { render } from 'test-utils';
import InfiniteProgressBar from '..';

const renderComponent = (props = {}) => render(<InfiniteProgressBar {...props} />);

describe('<InfiniteProgressBar />', () => {
  it('should render correctly with default props', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const { container: { firstChild } } = renderComponent({ color: 'white', bgColor: 'black' });
    expect(firstChild).toBeDefined();
  });

  it('should render <div> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('DIV');
  });
});
