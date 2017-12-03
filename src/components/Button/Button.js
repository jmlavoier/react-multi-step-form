import React, { PropTypes } from 'react';

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
