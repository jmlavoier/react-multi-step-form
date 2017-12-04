import React from 'react';
import PropTypes from 'prop-types';

import Item from 'components/Item';
import FirstStepForm from 'forms/FirstStepForm';
import SecondStepForm from 'forms/SecondStepForm';
import ThirdStepForm from 'forms/ThirdStepForm';
import FourthStepForm from 'forms/FourthStepForm';

const FORMS = [
  FirstStepForm,
  SecondStepForm,
  ThirdStepForm,
  FourthStepForm,
];

const ComposeAllForms = ({ step }) => {
  const CurrentForm = FORMS[step];

  return (
    <Item width="600px">
      <CurrentForm />
    </Item>
  );
};

ComposeAllForms.propTypes = {
  step: PropTypes.number.isRequired,
};

export default ComposeAllForms;
