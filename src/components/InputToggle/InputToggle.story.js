import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputToggle from './InputToggle';

storiesOf('Input Toggle', module)
  .add('Default', () => (
    <InputToggle name="input" label="Name" onChange={action('changed')} />
  ))
  .add('Without label', () => (
    <InputToggle name="input" onChange={action('changed')} />
  ))
  .add('With label', () => (
    <InputToggle name="input" label="Name" onChange={action('changed')} />
  ))
  .add('Invalid', () => (
    <InputToggle name="input" label="Name" onChange={action('changed')} isInvalid />
  ))
  .add('Checked', () => (
    <InputToggle name="input" label="Name" onChange={action('changed')} isChecked />
  ));
