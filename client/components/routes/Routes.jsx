import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from 'client/components/home/Home';
import Faqs from 'client/components/faqs/Faqs';

import { homeUrl, faqsUrl } from 'client/utils/page-urls';

const Routes = () => (
  <Fragment>
    <Route path={homeUrl()} exact component={Home} />
    <Route path={faqsUrl()} component={Faqs} />
  </Fragment>
);

export default Routes;
