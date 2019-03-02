import React, { Component } from 'react';
import theme from 'basic-styled-uikit/dist/theme';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './main.css';

import { Main } from './containers';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <IntlProvider locale="en">
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Route path="/" component={Main} />
          </HashRouter>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default App;
