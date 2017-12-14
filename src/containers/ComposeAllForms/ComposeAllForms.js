import React from 'react';
import PropTypes from 'prop-types';

import Item from 'components/Item';
import FirstStepForm from 'containers/FirstStepForm';
import SecondStepForm from 'containers/SecondStepForm';
import ThirdStepForm from 'containers/ThirdStepForm';
import FourthStepForm from 'containers/FourthStepForm';
import FivethStepForm from 'containers/FivethStepForm';
import LastStep from 'containers/LastStep';
import Header from 'components/Header';
import StepsWrapper from 'components/StepsWrapper';
import Container from 'components/Container';
import Box from 'components/Box';

const ComposeAllForms = ({ dataForm }) => {
  const { currentStep } = dataForm;

  return (
    <Item width="600px">
      <Box>
        <Header>
          <Container justifyContent="center">
            <Item>
              <StepsWrapper steps={5} currentStep={currentStep} />
            </Item>
          </Container>
        </Header>
        {currentStep === 1 && <FirstStepForm />}
        {currentStep === 2 && <SecondStepForm />}
        {currentStep === 3 && <ThirdStepForm />}
        {currentStep === 4 && <FourthStepForm />}
        {currentStep === 5 && <FivethStepForm />}
        {currentStep === 6 && <LastStep />}
      </Box>
    </Item>
  );
};

ComposeAllForms.propTypes = {
  dataForm: PropTypes.shape({
    form: PropTypes.object,
    currentStep: PropTypes.number,
  }).isRequired,
};

export default ComposeAllForms;
