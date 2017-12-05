import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import InputText from 'components/InputText';
import Button from 'components/Button';
import Form from 'components/Form';
import ProgressBar from 'components/ProgressBar';

const ThirdStepForm = ({ onChangeInput, thirdStepForm, onClickCheck }) => (
  <Form text={thirdStepForm.errorMessage} currentStep={2}>
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ width: '200px' }}>
        <InputText name="email" label="Name" value={thirdStepForm.text} onChange={e => onChangeInput(e.target.value)} />
      </Item>
      <Item styles={{ textAlign: 'center', padding: '18px 10px' }}>
        <Button text="Check Your Name" onClick={() => onClickCheck(thirdStepForm.text)} />
      </Item>
    </Container>
    <Container alignItems="flex-end" justifyContent="center">
      <Item flexGrow="1" styles={{ paddingTop: '40px', height: '20px' }}>
        {thirdStepForm.showProgressBar && <ProgressBar duration="2s" />}
      </Item>
    </Container>
  </Form>
);

ThirdStepForm.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  thirdStepForm: PropTypes.shape({
    text: PropTypes.string,
    errorMessage: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onClickCheck: PropTypes.func.isRequired,
};

export default ThirdStepForm;
