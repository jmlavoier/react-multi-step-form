import uid from 'uid';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Step.sass';

const getClassNames = isCompleted => classNames(style.step, {
  [style['is-completed']]: isCompleted,
});

const getLineWayClassName = isCompleted => classNames(style['line-way'], {
  [style['is-line-completed']]: isCompleted,
});

const Step = ({ pass, isCompleted, showLine }) => (
  <span>
    <div className={getClassNames(isCompleted)}>{pass}</div>
    {showLine && <span key={uid()} className={getLineWayClassName(isCompleted)} />}
  </span>
);

Step.propTypes = {
  pass: PropTypes.number,
  isCompleted: PropTypes.bool,
  showLine: PropTypes.bool,
};

Step.defaultProps = {
  pass: 0,
  isCompleted: false,
  showLine: false,
};

export default Step;
