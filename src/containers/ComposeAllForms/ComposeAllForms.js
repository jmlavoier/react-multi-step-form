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

const ComposeAllForms = ({ step }) => {
  const index = step - 1;
  const CurrentForm = FORMS[index];

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
