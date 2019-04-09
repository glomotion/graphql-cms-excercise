import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Routes from 'client/components/routes/Routes';
import Header from 'client/components/header/Header';

import styles from 'client/components/app/app.module.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div className={styles.app}>
      <Header />
      <Routes />
    </div>
  </ApolloProvider>
);

export default App;
