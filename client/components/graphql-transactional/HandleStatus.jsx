import React, { Fragment } from 'react';

import LoadingStatus from 'client/components/graphql-transactional/LoadingStatus';
import ErrorStatus from 'client/components/graphql-transactional/ErrorStatus';

const HandleStatus = ({ loading, error }) => (
  <Fragment>
    <LoadingStatus {...{ loading }} />
    <ErrorStatus {...{ error }} />
  </Fragment>
);

export default HandleStatus;
