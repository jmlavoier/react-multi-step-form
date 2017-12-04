import React from 'react';

import Container from 'components/Container';
import Item from 'components/Item';
import SelectBox from 'components/SelectBox';
import Form from 'forms/Form';

const FourthStepForm = () => (
  <Form text="Wellcome to the Multi Step Form, lets start!">
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ width: '300px' }} >
        <SelectBox name="c" label="Last choice" options={['C1', 'C2', 'C3']} />
      </Item>
    </Container>
  </Form>
);

export default FourthStepForm;
