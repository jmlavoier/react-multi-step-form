import React from 'react';
import PropTypes from 'prop-types';

import style from './Container.sass';

const Container = ({ children, width, height, alignItems, justifyContent, styles }) => (
  <div className={style.container} style={{ width, height, justifyContent, alignItems, ...styles }} >{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string),
};

Container.defaultProps = {
  children: '',
  width: '100%',
  height: 'auto',
  alignItems: 'flex-start',
  justifyContent: '',
  styles: {},
};

export default Container;
