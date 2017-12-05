import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.sass';

const Button = ({ onClick, text }) => (
  <button className={style.button} onClick={onClick} >{text}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};

export default Button;
