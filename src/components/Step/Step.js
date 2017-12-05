import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Step.sass';

const getClassNames = isCompleted => classNames(style.step, {
  [style['is-completed']]: isCompleted,
});

const Step = ({ pass, isCompleted }) => (
  <div className={getClassNames(isCompleted)}>{pass}</div>
);

Step.propTypes = {
  pass: PropTypes.number,
  isCompleted: PropTypes.bool,
};

Step.defaultProps = {
  pass: 0,
  isCompleted: false,
};

export default Step;
