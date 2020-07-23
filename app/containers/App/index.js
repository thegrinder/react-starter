import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import theme from '../../theme';
import '../../index.css';
import Main from '../Main/Main';

const App = () => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Route path="/" component={Main} />
      </HashRouter>
    </ThemeProvider>
  </IntlProvider>
);

export default App;
