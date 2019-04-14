import React, { lazy, Suspense } from 'react';
import { ResetCss } from 'basic-styled-uikit';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyles, Container } from '../../components';

const createLazyComponent = Component => () => (
  <Suspense fallback={<span>loading</span>}>
    <Component />
  </Suspense>
);

const Users = lazy(() => import('../Users'));
const User = lazy(() => import('../User'));

const LazyUsers = createLazyComponent(Users);
const LazyUser = createLazyComponent(User);

const Main = () => (
  <Container>
    <ResetCss />
    <GlobalStyles />
    <Switch>
      <Route path="/users/:uid" component={LazyUser} />
      <Route path="/users" component={LazyUsers} />
    </Switch>
  </Container>
);
export default Main;
