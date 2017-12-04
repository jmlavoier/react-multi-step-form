import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import classNames from 'classnames';
import style from './InputToggle.sass';

const inputId = `input-${uid()}`;

const getClassName = (isChecked, isInvalid) => classNames(style['input-wrapper'], {
  [style.invalid]: isInvalid,
  [style['is-checked']]: isChecked,
});

const InputToggle = ({ id, name, label, value, isChecked, onClick, isInvalid }) => (
  <div className={getClassName(isChecked, isInvalid)}>
    <span role="presentation" className={style.input} onClick={() => onClick(name)} />
    <input
      id={id}
      name={name}
      type="hidden"
      value={value}
      checked={isChecked}
    />
    {label && <span className={style.label}>{label}</span>}
  </div>
);

InputToggle.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
};

InputToggle.defaultProps = {
  id: inputId,
  value: '',
  isChecked: false,
  label: '',
  isInvalid: false,
};

export default InputToggle;
