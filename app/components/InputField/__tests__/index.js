import React from 'react';

import { render } from '../../../helpers/test-utils';
import InputField from '..';

const requiredProps = {
  onChange: jest.fn(),
  onBlur: jest.fn(),
  value: '',
  touched: false,
  id: 'id',
};


const renderComponent = (props = {}) => render(
  <InputField {...requiredProps} {...props} />,
);

describe('<InputField />', () => {
  it('should render correctly', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render error and label', () => {
    const { container: { firstChild }, getByText } = renderComponent({
      touched: true,
      error: 'error',
      label: 'label',
    });
    const errorElement = getByText('error');
    const labelElement = getByText('label');
    expect(firstChild).toContainElement(errorElement);
    expect(firstChild).toContainElement(labelElement);
  });
});
