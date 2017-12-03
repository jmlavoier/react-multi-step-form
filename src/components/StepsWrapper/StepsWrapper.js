import React from 'react';
import PropTypes from 'prop-types';
import Step from 'components/Step';
import uid from 'uid';

import classNames from 'classnames';
import style from './StepsWrapper.sass';

const getLineWayClassName = isCompleted => classNames(style['line-way'], {
  [style['is-completed']]: isCompleted,
});

function getSteps(steps, currentStep) {
  let stepElements = [];

  for (let i = 0; i < steps; i += 1) {
    const pass = i + 1;
    const LineWay = i < steps - 1 ? <span key={uid()} className={getLineWayClassName(pass <= currentStep)} /> : null;

    stepElements = [
      ...stepElements,
      <Step key={uid()} pass={pass} isCompleted={pass <= currentStep} />,
      LineWay,
    ];
  }
  return stepElements;
}

const StepsWrapper = ({ steps, currentStep }) => (
  <div className={style['steps-wrapper']}>
    {getSteps(steps, currentStep)}
  </div>
);

StepsWrapper.propTypes = {
  steps: PropTypes.number,
  currentStep: PropTypes.number,
};

StepsWrapper.defaultProps = {
  steps: 0,
  currentStep: 0,
};

export default StepsWrapper;
