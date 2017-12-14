import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import InputToggle from 'components/InputToggle';
import Form from 'components/Form';
import ProgressBar from 'components/ProgressBar';

const SecondStepForm = ({ onClickRadio, secondStepForm }) => (
  <Form text="Wellcome to the Multi Step Form, lets start!">
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputToggle name="b1" label="B1" onClick={onClickRadio} value="B1" isChecked={secondStepForm.b1} />
      </Item>
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputToggle name="b2" label="B2" onClick={onClickRadio} value="B2" isChecked={secondStepForm.b2} />
      </Item>
    </Container>
    <Container alignItems="flex-end" justifyContent="center">
      <Item flexGrow="1" styles={{ paddingTop: '40px', height: '20px' }}>
        {secondStepForm.showProgressBar && <ProgressBar />}
      </Item>
    </Container>
  </Form>
);

SecondStepForm.propTypes = {
  onClickRadio: PropTypes.func.isRequired,
  secondStepForm: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default SecondStepForm;
