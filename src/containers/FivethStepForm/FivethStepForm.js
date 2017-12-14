import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import Form from 'components/Form';
import ProgressBar from 'components/ProgressBar';
import Button from 'components/Button';

const FivethStepForm = ({ onClickSubmit, fivethStepForm, ...otherForms }) => (
  <Form text="Yes, your are almost there!">
    <Container alignItems="flex-start" justifyContent="center">
      <Item flexGrow="1" styles={{ textAlign: 'center' }} >
        <Button text="Submit" onClick={() => onClickSubmit(otherForms)} />
      </Item>
    </Container>
    <Container alignItems="flex-end" justifyContent="center">
      <Item flexGrow="1" styles={{ paddingTop: '40px', height: '20px' }}>
        {fivethStepForm.showProgressBar && <ProgressBar duration="2s" />}
      </Item>
    </Container>
  </Form>
);

FivethStepForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  fivethStepForm: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default FivethStepForm;
