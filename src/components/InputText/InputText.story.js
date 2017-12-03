import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo, setDefaults } from '@storybook/addon-info';

import InputText from './InputText';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Input Text', module)
  .add('Default', withInfo()(() => (
    <InputText name="input" onChange={action('changed')} />
  )))
  .add('With value', withInfo()(() => {
    const newValue = 'Name';

    return (
      <InputText name="input" onChange={action('changed')} value={newValue} />
    );
  }))
  .add('With label', withInfo()(() => (
    <InputText name="input" label="Name" onChange={action('changed')} />
  )))
  .add('Invalid', withInfo()(() => (
    <InputText name="input" label="Name" onChange={action('changed')} isInvalid />
  )));
