import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-testing-library';

import theme from '../../theme/components';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Providers = ({ children }) => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </IntlProvider>
);

Providers.propTypes = propTypes;

const customRender = (ui, options) => render(ui, { wrapper: Providers, ...options });

export * from 'react-testing-library';
export { customRender as render };
