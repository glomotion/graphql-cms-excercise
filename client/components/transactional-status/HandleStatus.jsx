import React, { Fragment } from 'react';

import LoadingStatus from 'client/components/transactional-status/LoadingStatus';
import ErrorStatus from 'client/components/transactional-status/ErrorStatus';

const HandleStatus = ({ loading, error }) => (
  <Fragment>
    <LoadingStatus {...{ loading }} />
    <ErrorStatus {...{ error }} />
  </Fragment>
);

export default HandleStatus;
