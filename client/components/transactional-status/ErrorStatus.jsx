// @flow
import React from 'react';

const ErrorStatus = ({ error }: { error: boolean }) => (error ? <p>error</p> : null);

export default ErrorStatus;
