import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import SelectBox from 'components/SelectBox';
import Form from 'components/Form';

const FourthStepForm = ({ onChangeSelect, fourthStepForm }) => (
  <Form text="Wellcome to the Multi Step Form, lets start!">
    <Container alignItems="flex-start" justifyContent="center">
      <Item styles={{ width: '300px' }} >
        <SelectBox name="c" label="Last choice" optionValue={fourthStepForm.c} onChange={onChangeSelect} options={['C1', 'C2', 'C3']} />
      </Item>
    </Container>
  </Form>
);

FourthStepForm.propTypes = {
  onChangeSelect: PropTypes.func.isRequired,
  fourthStepForm: PropTypes.shape({
    c: PropTypes.string.isRequired,
    showProgressBar: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FourthStepForm;
