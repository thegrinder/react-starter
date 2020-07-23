import React from 'react';

import { render } from 'test-utils';
import Container from '../Container';

const children = <span>children</span>;

const renderComponent = (props = {}) =>
  render(<Container {...props}>{children}</Container>);

describe('<Container />', () => {
  it('should render correctly with default props and children', () => {
    const {
      container: { firstChild },
      getByText,
    } = renderComponent();
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <div> tag by default', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('DIV');
  });
});
