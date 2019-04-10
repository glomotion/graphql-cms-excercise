// @flow
import React from 'react';

const LoadingStatus = ({ loading }: { loading: boolean }) => (loading ? <p>loading</p> : null);

export default LoadingStatus;
