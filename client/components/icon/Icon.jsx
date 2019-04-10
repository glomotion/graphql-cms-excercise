// @flow
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from 'client/components/icon/icon.module.mscss';

const Icon = ({
  className,
  type,
  ...props
}: {
  type: string,
  className?: string,
  props?: Object,
}) => (
  <i className={classNames(styles.icon, className)} {...props}>
    {type}
  </i>
);

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Icon;
