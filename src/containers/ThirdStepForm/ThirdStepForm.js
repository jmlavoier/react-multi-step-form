import React from 'react';

import Container from 'components/Container';
import Item from 'components/Item';
import InputText from 'components/InputText';
import Button from 'components/Button';
import Form from 'components/Form';

const ThirdStepForm = () => (
  <Form text="Wellcome to the Multi Step Form, lets start!">
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ width: '200px' }}>
        <InputText name="email" label="E-mail" />
      </Item>
      <Item styles={{ textAlign: 'center', padding: '18px 10px' }}>
        <Button text="Check Your E-mail" />
      </Item>
    </Container>
  </Form>
);

export default ThirdStepForm;
