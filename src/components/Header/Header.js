import React from 'react';
import PropTypes from 'prop-types';

import style from './Header.sass';

const Header = ({ title, text, children }) => (
  <div className={style.header}>
    {title && <h2>{title}</h2>}
    {text && <p>{text}</p>}
    {children && <div>{children}</div>}
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: '',
  text: '',
  children: '',
};

export default Header;
