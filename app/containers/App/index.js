import React from 'react';
import { IntlProvider } from 'react-intl';

import Home from '../Home/Home';
import '../../index.css';

const App = () => (
  <IntlProvider locale="en">
    <Home />
  </IntlProvider>
);

export default App;
