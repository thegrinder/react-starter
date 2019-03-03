import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { configureStore, runSaga } from '@/store';
import theme from '@/theme/components';
import '@/main.css';
import Main from '../Main';

const store = configureStore();

runSaga();

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <ThemeProvider theme={theme}>
            <HashRouter>
              <Route path="/" component={Main} />
            </HashRouter>
          </ThemeProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
