import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../theme/components';
import Container from '..';


const children = <span>children</span>;

const renderComponent = (props = {}) => render(
  <ThemeProvider theme={theme}>
    <Container {...props}>{children}</Container>
  </ThemeProvider>,
);

describe('<Container />', () => {
  afterEach(cleanup);

  it('should render correctly with default props and children', () => {
    const { container: { firstChild }, getByText } = renderComponent();
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <div> tag by default', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('DIV');
  });
});
