import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputCheckBox from './InputCheckBox';

storiesOf('Input CheckBox', module)
  .add('Default', () => (
    <InputCheckBox name="input" label="Name" onChange={action('changed')} />
  ))
  .add('Without label', () => (
    <InputCheckBox name="input" onChange={action('changed')} />
  ))
  .add('With label', () => (
    <InputCheckBox name="input" label="Name" onChange={action('changed')} />
  ))
  .add('Invalid', () => (
    <InputCheckBox name="input" label="Name" onChange={action('changed')} isInvalid />
  ))
  .add('Checked', () => (
    <InputCheckBox name="input" label="Name" onChange={action('changed')} isChecked />
  ));
