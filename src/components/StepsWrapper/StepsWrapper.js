import React from 'react';
import PropTypes from 'prop-types';
import Step from 'components/Step';

import style from './StepsWrapper.sass';

// I will need to implement the steps prop to iterate
const StepsWrapper = ({ steps, currentStep }) => (
  <div className={style['steps-wrapper']}>
    <Step pass={1} isCompleted={1 < currentStep} showLine={1 < steps} />
    <Step pass={2} isCompleted={2 < currentStep} showLine={2 < steps} />
    <Step pass={3} isCompleted={3 < currentStep} showLine={3 < steps} />
    <Step pass={4} isCompleted={4 < currentStep} showLine={4 < steps} />
    <Step pass={5} isCompleted={5 < currentStep} showLine={5 < steps} />
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
