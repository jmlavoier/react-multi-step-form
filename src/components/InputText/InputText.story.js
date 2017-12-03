import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputText from './InputText';

storiesOf('Input Text', module)
  .add('Default', () => (
    <InputText name="input" onChange={action('changed')} />
  ))
  .add('With value', () => {
    const newValue = 'Name';

    return (
      <InputText name="input" onChange={action('changed')} value={newValue} />
    );
  })
  .add('With label', () => (
    <InputText name="input" label="Name" onChange={action('changed')} />
  ))
  .add('Invalid', () => (
    <InputText name="input" label="Name" onChange={action('changed')} isInvalid />
  ));
