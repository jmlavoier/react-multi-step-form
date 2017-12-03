import React from 'react';
import { createFormStepsStore } from 'utils';

import Container from 'components/Container';
import Item from 'components/Item';
import InputCheckBox from 'components/InputCheckBox';
import Box from 'components/Box';
import Header from 'components/Header';
import StepsWrapper from 'components/StepsWrapper';


const HeaderForm = (
  <Header>
    <Container justifyContent="center">
      <Item>
        <StepsWrapper steps={4} currentStep={0} />
      </Item>
    </Container>
  </Header>
);

const FirstStepForm = () => (
  <Box header={HeaderForm}>
    <Container alignItems="flex-start" justifyContent="center">
      <Item flexGrow="1" styles={{ textAlign: 'center', paddingBottom: '20px' }}>
        <p>Wellcome to the Multi Step Form, lets start!</p>
      </Item>
    </Container>
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputCheckBox name="a1" label="A1" />
      </Item>
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputCheckBox name="a2" label="A2" />
      </Item>
    </Container>
  </Box>
);

export default FirstStepForm;
