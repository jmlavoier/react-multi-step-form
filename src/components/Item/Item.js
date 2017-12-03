import React from 'react';
import PropTypes from 'prop-types';
import style from './Item.sass';

const Item = ({ children, width, height, flexGrow, styles }) => (
  <div className={style.item} style={{ width, height, flexGrow, ...styles }} >{children}</div>
);

Item.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  flexGrow: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string),
};

Item.defaultProps = {
  children: '',
  width: '',
  height: '',
  flexGrow: '0',
  styles: {},
};

export default Item;
