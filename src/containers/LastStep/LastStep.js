import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import Form from 'components/Form';

const LastStep = ({ dataForm }) => (
  <Form text="Grate job! You finished the forms. Above is the JSON sent to server." currentStep={5}>
    <Container alignItems="flex-start" justifyContent="center">
      <Item flexGrow="1" styles={{ textAlign: 'center', backgroundColor: '#f8d8d8', borderRadius: '3px' }} >
        {JSON.stringify(dataForm)}
      </Item>
    </Container>
    <Container alignItems="flex-start" justifyContent="center">
      <Item flexGrow="1" styles={{ textAlign: 'center', paddingBottom: '20px' }} >
        <p>
          Thank you for played this application.
        </p>
      </Item>
    </Container>
  </Form>
);

LastStep.propTypes = {
  dataForm: PropTypes.shape({
    a: PropTypes.array.isRequired,
    b: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    c: PropTypes.string.isRequired,
  }).isRequired,
};

export default LastStep;
