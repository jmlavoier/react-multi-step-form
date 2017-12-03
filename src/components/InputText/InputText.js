import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import classNames from 'classnames';
import style from './InputText.sass';

const inputId = `input-${uid()}`;

const getClassName = isInvalid => classNames(style['input-wrapper'], {
  [style.invalid]: isInvalid,
});

const InputText = ({ id, name, label, value, onChange, isInvalid }) => (
  <div className={getClassName(isInvalid)}>
    <span className={style.label}>{label}</span>
    <input
      id={id}
      className={style.input}
      name={name}
      type="text"
      value={value}
      required="required"
      onChange={onChange}
    />
  </div>
);

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
};

InputText.defaultProps = {
  id: inputId,
  value: '',
  label: '',
  isInvalid: false,
};

export default InputText;
