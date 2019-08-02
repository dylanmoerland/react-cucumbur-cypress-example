import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const CalculatorScreen = lazy(() => import('screens/CalculatorScreen'));

const App = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={CalculatorScreen} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
