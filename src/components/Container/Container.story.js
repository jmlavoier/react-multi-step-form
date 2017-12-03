import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

import Item from 'components/Item';
import Box from 'components/Box';
import Container from './Container';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Container', module)
  .add('Default', withInfo()(() => (
    <Container justifyContent="center" alignItems="center" height="500px" styles={{ backgroundColor: '#f1f1f1' }}>
      <Item>
        <Box>
          Box inside a container flex
        </Box>
      </Item>
    </Container>
  )));
