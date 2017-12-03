import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo, setDefaults } from '@storybook/addon-info';

import InputToggle from './InputToggle';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Input Toggle', module)
  .add('Default', withInfo()(() => (
    <InputToggle name="input" label="Name" onChange={action('changed')} />
  )))
  .add('Without label', withInfo()(() => (
    <InputToggle name="input" onChange={action('changed')} />
  )))
  .add('With label', withInfo()(() => (
    <InputToggle name="input" label="Name" onChange={action('changed')} />
  )))
  .add('Invalid', withInfo()(() => (
    <InputToggle name="input" label="Name" onChange={action('changed')} isInvalid />
  )))
  .add('Checked', () => withInfo()((
    <InputToggle name="input" label="Name" onChange={action('changed')} isChecked />
  )));
