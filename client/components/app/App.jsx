import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from 'client/components/routes/Routes';
import Header from 'client/components/header/Header';
import history from 'client/utils/history';

import styles from 'client/components/app/app.module.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  </ApolloProvider>
);

export default App;
