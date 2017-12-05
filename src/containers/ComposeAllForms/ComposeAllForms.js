import React from 'react';
import PropTypes from 'prop-types';

import Item from 'components/Item';
import FirstStepForm from 'containers/FirstStepForm';
import SecondStepForm from 'containers/SecondStepForm';
import ThirdStepForm from 'containers/ThirdStepForm';
import FourthStepForm from 'containers/FourthStepForm';
import FivethStepForm from 'containers/FivethStepForm';

// I must clear this this, creating the step state to manage the stepForms
const FORMS = [
  FirstStepForm,
  SecondStepForm,
  ThirdStepForm,
  FourthStepForm,
  FivethStepForm,
  Item,
];

const ComposeAllForms = ({ firstStepForm, secondStepForm, thirdStepForm, fourthStepForm, fivethStepForm }) => {
  let step = 0;
  step = firstStepForm.completed ? 1 : step;
  step = secondStepForm.completed ? 2 : step;
  step = thirdStepForm.completed ? 3 : step;
  step = fourthStepForm.completed ? 4 : step;
  step = fivethStepForm.completed ? 5 : step;

  const CurrentForm = FORMS[step];

  return (
    <Item width="600px">
      <CurrentForm />
    </Item>
  );
};

ComposeAllForms.propTypes = {
  firstStepForm: PropTypes.objectOf(PropTypes.bool).isRequired,
  secondStepForm: PropTypes.objectOf(PropTypes.bool).isRequired,
  thirdStepForm: PropTypes.shape({ text: PropTypes.string }).isRequired,
  fourthStepForm: PropTypes.shape({ c: PropTypes.string }).isRequired,
  fivethStepForm: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default ComposeAllForms;
