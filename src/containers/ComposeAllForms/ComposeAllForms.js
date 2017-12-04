import React from 'react';
import PropTypes from 'prop-types';

import Item from 'components/Item';
import FirstStepForm from 'containers/FirstStepForm';
import SecondStepForm from 'containers/SecondStepForm';
import ThirdStepForm from 'containers/ThirdStepForm';
import FourthStepForm from 'containers/FourthStepForm';

const FORMS = [
  FirstStepForm,
  SecondStepForm,
  ThirdStepForm,
  FourthStepForm,
];

const ComposeAllForms = ({ firstStepForm, secondStepForm, thirdStepForm, fourthStepForm }) => {
  let step = 0;
  step = firstStepForm.completed ? 1 : step;
  step = secondStepForm.completed ? 2 : step;
  step = thirdStepForm.completed ? 3 : step;
  step = fourthStepForm.completed ? 4 : step;

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
};

export default ComposeAllForms;
