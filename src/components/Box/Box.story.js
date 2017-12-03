import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

import Box from './Box';
import Button from 'components/Button';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Box', module)
  .add('Default', withInfo()(() => (
    <Box />
  )))
  .add('With content', withInfo()(() => {
    const header = <h3>Title</h3>;
    return (
      <Box header={header} >Inside the box</Box>
    );
  }))
  .add('With header', withInfo()(() => {
    const header = <h3>Title</h3>;
    return (
      <Box header={header} />
    );
  }))
  .add('With footer', withInfo()(() => {
    const header = <h3>Title</h3>;
    const footer = <Button text="Submit" />;
    return (
      <Box header={header} footer={footer} >Think outside the box!</Box>
    );
  }));
