import React from 'react';

import Container from 'components/Container';
import Item from 'components/Item';
import InputCheckBox from 'components/InputCheckBox';
import Form from 'forms/Form';

const FirstStepForm = () => (
  <Form text="Wellcome to the Multi Step Form, lets start!">
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputCheckBox name="a1" label="A1" />
      </Item>
      <Item styles={{ textAlign: 'center', width: '100px' }}>
        <InputCheckBox name="a2" label="A2" />
      </Item>
    </Container>
  </Form>
);

export default FirstStepForm;
