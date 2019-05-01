import React from 'react';

import { render } from 'test-utils';
import GlobalStyles from '..';

describe('<GlobalStyles />', () => {
  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = render(<GlobalStyles />);
    expect(firstChild).toBeDefined();
  });
});
