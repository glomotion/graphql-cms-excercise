import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'client/components/home/Home';
import Faqs from 'client/components/faqs/Faqs';

import { homeUrl, faqsUrl } from 'client/utils/page-urls';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route path={homeUrl()} exact component={Home} />
    <Route path={faqsUrl()} component={Faqs} />
  </Router>
);
