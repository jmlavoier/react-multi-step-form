import React from 'react';

import Container from 'components/Container';
import Item from 'components/Item';
import InputToggle from 'components/InputToggle';
import Form from 'components/Form';

const FirstStepForm = () => (
  <Form text="Wellcome to the Multi Step Form, lets start!">
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputToggle name="b1" label="B1" />
      </Item>
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputToggle name="b2" label="B2" />
      </Item>
    </Container>
  </Form>
);

export default FirstStepForm;
