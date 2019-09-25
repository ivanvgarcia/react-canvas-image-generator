import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ScrollToTop from 'components/ScrollToTop';
import Landing from 'components/landing/Landing';
import Canvas from 'components/canvas/Canvas';
import Dashboard from 'components/dashboard/Dashboard';
import Navigation from 'components/navigation/Navigation';
import PrivateRoute from 'components/routing/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store.js';
import { checkSession } from './actions/auth';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    border-sizing: border-box;
    font-family: "Helvetica";
    height: 100%;
  }
  #root{
    height: 100%;
  }
  .App {
    height: 100%;
  }
  .slick-slider .slick-prev {
    z-index: 999 ;
    left: 5px ;
  }
  .slick-slider .slick-next {
    z-index: 999 ;
    right: 5px ;
  }
  h1 {
    color: white;
  }
`;

const Container = styled.div`
  height: 100%;
`;

function App() {
  useEffect(() => {
    if (!store.getState().auth.user) {
      store.dispatch(checkSession());
    }
  }, []);

  return (
    <Router className="App">
      <Provider store={store}>
        <ScrollToTop>
          <GlobalStyle />
          <Container>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/avatar-generator" component={Canvas} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Container>
        </ScrollToTop>
      </Provider>
    </Router>
  );
}

export default App;
