import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { configureStore, runSaga } from '../../redux/store';
import theme from '../../theme/components';
import Main from '../Main';
import '../../index.css';

const store = configureStore();

runSaga();

const App = () => (
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

export default App;
