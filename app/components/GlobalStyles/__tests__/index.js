import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';

import theme from '../../../theme/components';
import GlobalStyles from '..';

const renderComponent = () => render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
  </ThemeProvider>,
);

describe('<GlobalStyles />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
  });
});
