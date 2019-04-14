import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../theme/components';
import SubmitButton from '..';


const renderComponent = () => render(
  <ThemeProvider theme={theme}>
    <SubmitButton>click me</SubmitButton>
  </ThemeProvider>,
);

describe('<SubmitButton />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild.type).toEqual('submit');
    expect(firstChild).toMatchSnapshot();
  });
});
