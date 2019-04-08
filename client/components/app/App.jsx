import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Home from 'client/components/home/Home';
import Faqs from 'client/components/faqs/Faqs';

import { homeUrl, faqsUrl } from 'client/utils/page-urls';

import styles from 'client/components/app/app.module.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className={styles.moo}>
          <nav>menu shit in here!</nav>

          <Route path={homeUrl()} exact component={Home} />
          <Route path={faqsUrl()} component={Faqs} />
        </div>
      </Router>
  </ApolloProvider>
  );
}

export default App;
