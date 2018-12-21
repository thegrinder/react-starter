import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'atomic-ui-kit';
import { HashRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import 'atomic-ui-kit/lib/atomic-ui-kit.min.css';

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
