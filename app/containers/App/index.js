import React from 'react';
import { IntlProvider } from 'react-intl';

import { GlobalStyles } from 'components';

import Home from '../Home/Home';

const App = () => (
  <IntlProvider locale="en">
    <GlobalStyles />
    <Home />
  </IntlProvider>
);

export default App;
