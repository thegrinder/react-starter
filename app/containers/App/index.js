import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import '../../index.css';
import Main from '../Main/Main';

const App = () => (
  <IntlProvider locale="en">
    <HashRouter>
      <Route path="/" component={Main} />
    </HashRouter>
  </IntlProvider>
);

export default App;
