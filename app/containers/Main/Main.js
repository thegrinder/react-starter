import React, { lazy, Suspense } from 'react';
import { ResetCss } from 'basic-styled-uikit';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyles, InfiniteProgressBar } from 'components';

const createLazyComponent = (Component) => () => (
  <Suspense fallback={<InfiniteProgressBar />}>
    <Component />
  </Suspense>
);

const Home = lazy(() => import('../Home/Home'));
const LazyHome = createLazyComponent(Home);

const Main = () => (
  <>
    <ResetCss />
    <GlobalStyles />
    <Switch>
      <Route path="/" component={LazyHome} />
    </Switch>
  </>
);

export default Main;
