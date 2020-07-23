import React from 'react';

import { render } from 'test-utils';
import GlobalStyles from '../GlobalStyles';

describe('<GlobalStyles />', () => {
  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = render(<GlobalStyles />);
    expect(firstChild).toBeDefined();
  });
});
