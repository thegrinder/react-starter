import React from 'react';
import { ResetCss } from 'basic-styled-uikit';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '@/components';
import Users from '@/containers/Users';
import User from '@/containers/User';

const Main = () => (
  <div>
    <ResetCss />
    <GlobalStyles />
    <Switch>
      <Route path="/users/:uid" component={User} />
      <Route path="/users" component={Users} />
    </Switch>
  </div>
);
export default Main;
