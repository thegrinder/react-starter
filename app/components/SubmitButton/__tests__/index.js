import React from 'react';

import { render } from 'test-utils';
import SubmitButton from '..';


const renderComponent = () => render(
  <SubmitButton>click me</SubmitButton>,
);

describe('<SubmitButton />', () => {
  it('should render correctly', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.type).toEqual('submit');
    expect(firstChild).toMatchSnapshot();
  });
});
