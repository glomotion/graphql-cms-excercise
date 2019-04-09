import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router-dom';
import fetch from 'unfetch';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Routes from 'client/components/routes/Routes';
import Header from 'client/components/header/Header';
import history from 'client/utils/history';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
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
