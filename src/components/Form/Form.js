import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Item from 'components/Item';

const Form = ({ text, children }) => (
  <div>
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
  </div>
);

Form.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

Form.defaultProps = {
  text: '',
  children: '',
  currentStep: 0,
  header: '',
};

export default Form;
