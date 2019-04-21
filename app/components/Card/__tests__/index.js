import React from 'react';

import { render } from '../../../helpers/test-utils';
import Card from '..';


const children = <span>children</span>;

const renderComponent = (props = {}) => render(
  <Card {...props}>{children}</Card>,
);

describe('<Card />', () => {
  it('should render correctly with default props and children', () => {
    const { container: { firstChild }, getByText } = renderComponent();
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <div> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('DIV');
  });
});
