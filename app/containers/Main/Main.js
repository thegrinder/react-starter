import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { InfiniteProgressBar } from 'components';

const createLazyComponent = (Component) => () => (
  <Suspense fallback={<InfiniteProgressBar />}>
    <Component />
  </Suspense>
);

const Home = lazy(() => import('../Home/Home'));
const LazyHome = createLazyComponent(Home);

const Main = () => (
  <Switch>
    <Route path="/" component={LazyHome} />
  </Switch>
);

export default Main;
