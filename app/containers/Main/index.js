import React, { lazy, Suspense } from 'react';
import { ResetCss } from 'basic-styled-uikit';
import { Route, Switch, Redirect } from 'react-router-dom';

import { GlobalStyles, InfiniteProgressBar } from '../../components';

const createLazyComponent = Component => () => (
  <Suspense fallback={<InfiniteProgressBar />}>
    <Component />
  </Suspense>
);

const Users = lazy(() => import('../Users'));
const User = lazy(() => import('../User'));

const LazyUsers = createLazyComponent(Users);
const LazyUser = createLazyComponent(User);

const Main = () => (
  <>
    <ResetCss />
    <GlobalStyles />
    <Switch>
      <Route path="/users/:uid" component={LazyUser} />
      <Route path="/users" component={LazyUsers} />
      <Redirect to="/users" component={LazyUsers} />
    </Switch>
  </>
);
export default Main;
