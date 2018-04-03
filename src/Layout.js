import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers' // Or wherever you keep your reducers

/* Common Components */
import Header from './layout/header';
import Footer from './layout/footer';

import { Body } from './App';
import MainContainer from './MainContainer';
import {Sidebar} from "./components/Sidebar"

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

class Layout extends React.Component {
  render() {
    console.log("Layout");
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MainContainer>
            <Sidebar />
            <Header />
            
            <Body />

            <Footer />
          </MainContainer>
        </ConnectedRouter>
      </Provider>
    );
  }
};

export default <Layout />
