import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import * as RTL from '@testing-library/react';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Providers = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
);

Providers.propTypes = propTypes;

export const render = (ui, options) =>
  RTL.render(ui, { wrapper: Providers, ...options });

export const { fireEvent, act } = RTL;
