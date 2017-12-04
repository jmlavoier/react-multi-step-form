import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import InputText from 'components/InputText';
import Button from 'components/Button';
import Form from 'components/Form';

const ThirdStepForm = ({ onChangeInput, thirdStepForm, onClickCheck }) => (
  <Form text={thirdStepForm.errorMessage}>
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ width: '200px' }}>
        <InputText name="email" label="E-mail" value={thirdStepForm.text} onChange={e => onChangeInput(e.target.value)} />
      </Item>
      <Item styles={{ textAlign: 'center', padding: '18px 10px' }}>
        <Button text="Check Your E-mail" onClick={() => onClickCheck(thirdStepForm.text)} />
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
