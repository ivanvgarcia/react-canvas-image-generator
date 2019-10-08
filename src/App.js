import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store.js';
import { checkSession } from 'actions/auth';

import ScrollToTop from 'components/ScrollToTop';
import Landing from 'components/landing/Landing';
import Generator from 'components/generator/Generator';
import Dashboard from 'components/dashboard/Dashboard';
import Navigation from 'components/navigation/Navigation';
import PrivateRoute from 'components/routing/PrivateRoute';
import GlobalStyle from 'components/commonStyles/globalStyles';
import { MainContainer } from 'components/commonStyles';
import FullLoader from 'components/loader/FullLoader.js';

function App() {
  useEffect(() => {
    store.dispatch(checkSession());
  }, []);

  return (
    <Router className="App">
      <Provider store={store}>
        <Suspense fallback={<FullLoader message="Loading App..." />}>
          <ScrollToTop>
            <GlobalStyle />
            <MainContainer>
              <Navigation />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/avatar-generator" component={Generator} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </MainContainer>
          </ScrollToTop>
        </Suspense>
      </Provider>
    </Router>
  );
}

export default App;
