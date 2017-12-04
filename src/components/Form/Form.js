import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';
import Box from 'components/Box';
import Header from 'components/Header';
import StepsWrapper from 'components/StepsWrapper';


const HeaderForm = (
  <Header>
    <Container justifyContent="center">
      <Item>
        <StepsWrapper steps={4} currentStep={0} />
      </Item>
    </Container>
  </Header>
);

const Form = ({ text, children }) => (
  <Box header={HeaderForm}>
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
};

Form.defaultProps = {
  text: '',
  children: '',
};

export default Form;
