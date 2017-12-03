import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import classNames from 'classnames';
import style from './SelectBox.sass';

const selectId = `select-${uid()}`;

const getClassName = isInvalid => classNames(style['select-wrapper'], {
  [style.invalid]: isInvalid,
});

const SelectBox = ({ id, name, label, options, value, onChange, isInvalid }) => (
  <div className={getClassName(isInvalid)}>
    <span className={style.label}>{label}</span>
    <select id={id} className={style.select} name={name} onChange={onChange}>
      <option value="">Select</option>
      {options.map(option => <option value={option} selected={option === value && 'selected'} >{option}</option>)}
    </select>
  </div>
);

SelectBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
};

SelectBox.defaultProps = {
  id: selectId,
  options: [],
  value: '',
  label: '',
  isInvalid: false,
};

export default SelectBox;
