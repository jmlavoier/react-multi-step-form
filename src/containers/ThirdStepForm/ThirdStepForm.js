import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import InputText from 'components/InputText';
import Button from 'components/Button';
import Form from 'components/Form';

const ThirdStepForm = ({ onChangeInput, thirdStepForm }) => (
  <Form text="Wellcome to the Multi Step Form, lets start!">
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ width: '200px' }}>
        <InputText name="email" label="E-mail" value={thirdStepForm.value} onChange={e => onChangeInput(e.target.value)} />
      </Item>
      <Item styles={{ textAlign: 'center', padding: '18px 10px' }}>
        <Button text="Check Your E-mail" />
      </Item>
    </Container>
  </Form>
);

ThirdStepForm.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  thirdStepForm: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default ThirdStepForm;
