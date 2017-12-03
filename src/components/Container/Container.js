import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Container.sass';

const getClassNames = className => classNames(className, style.container);

const Container = ({ className, children, width, height, alignItems, justifyContent, styles }) => (
  <div className={getClassNames(className)} style={{ width, height, justifyContent, alignItems, ...styles }} >{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string),
};

Container.defaultProps = {
  className: '',
  children: '',
  width: '100%',
  height: 'auto',
  alignItems: 'flex-start',
  justifyContent: '',
  styles: {},
};

export default Container;
