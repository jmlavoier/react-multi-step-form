import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/Form';

import Container from 'components/Container';
import Item from 'components/Item';
import InputCheckBox from 'components/InputCheckBox';
import ProgressBar from 'components/ProgressBar';

const FirstStepForm = ({ onClickCheckBox, firstStepForm }) => (
  <Form text="Wellcome to the Multi Step Form, lets start!" currentStep={0}>
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputCheckBox name="a1" isChecked={firstStepForm.a1} label="A1" onClick={onClickCheckBox} />
      </Item>
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputCheckBox name="a2" isChecked={firstStepForm.a2} label="A2" onClick={onClickCheckBox} />
      </Item>
    </Container>
    <Container alignItems="flex-end" justifyContent="center">
      <Item flexGrow="1" styles={{ paddingTop: '40px', height: '20px' }}>
        {firstStepForm.showProgressBar && <ProgressBar />}
      </Item>
    </Container>
  </Form>
);

FirstStepForm.propTypes = {
  onClickCheckBox: PropTypes.func.isRequired,
  firstStepForm: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default FirstStepForm;
