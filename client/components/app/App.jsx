import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from '@client/components/app/app.module.scss';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const AppRouter = () => {
  return (
    <Router>
      <div className={styles.moo}>
        <nav>
          <ul>
            <li>menu shit in here!</li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
