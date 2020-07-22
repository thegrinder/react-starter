/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import * as RTL from '@testing-library/react';

import theme from '../theme';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Providers = ({ children }) => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </IntlProvider>
);

Providers.propTypes = propTypes;

export const render = (ui, options) =>
  RTL.render(ui, { wrapper: Providers, ...options });

export const { fireEvent, act } = RTL;

export const createStore = configureStore();
