import React from 'react';
import classNames from 'classnames';

import styles from 'client/components/icon/icon.module.scss';

const Icon = ({ className, type, ...props }) => (
  <i className={classNames(styles.icon, className)} {...props}>
    {type}
  </i>
);

export default Icon;
