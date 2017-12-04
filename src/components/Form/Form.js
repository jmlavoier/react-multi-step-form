import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import Box from 'components/Box';
import Header from 'components/Header';
import StepsWrapper from 'components/StepsWrapper';


const HeaderForm = currentStep => (
  <Header>
    <Container justifyContent="center">
      <Item>
        <StepsWrapper steps={4} currentStep={currentStep} />
      </Item>
    </Container>
  </Header>
);

const Form = ({ text, children, currentStep }) => (
  <Box header={HeaderForm(currentStep)}>
    {text &&
      <Container alignItems="flex-start" justifyContent="center">
        <Item flexGrow="1" styles={{ textAlign: 'center', paddingBottom: '20px' }}>
          <p>{text}</p>
        </Item>
      </Container>
    }
    <div>
      {children}
    </div>
  </Box>
);

Form.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  currentStep: PropTypes.number,
};

Form.defaultProps = {
  text: '',
  children: '',
  currentStep: 0,
};

export default Form;
