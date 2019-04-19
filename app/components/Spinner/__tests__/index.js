import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-testing-library';

import theme from '../../../theme/components';
import Spinner from '..';

const requiredProps = {
  color: 'black',
};

const renderComponent = (props = {}) => render(
  <ThemeProvider theme={theme}>
    <Spinner {...requiredProps} {...props} />
  </ThemeProvider>,
);

describe('<Spinner />', () => {
  it('should render correctly with default props', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const { container: { firstChild } } = renderComponent({ color: 'white', sizing: 40 });
    expect(firstChild).toBeDefined();
  });

  it('should render <span> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('SPAN');
  });
});
