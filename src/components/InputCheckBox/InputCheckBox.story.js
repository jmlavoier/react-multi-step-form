import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo, setDefaults } from '@storybook/addon-info';

import InputCheckBox from './InputCheckBox';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Input CheckBox', module)
  .add('Default', withInfo()(() => (
    <InputCheckBox name="input" label="Name" onChange={action('changed')} />
  )))
  .add('Without label', withInfo()(() => (
    <InputCheckBox name="input" onChange={action('changed')} />
  )))
  .add('With label', withInfo()(() => (
    <InputCheckBox name="input" label="Name" onChange={action('changed')} />
  )))
  .add('Invalid', withInfo()(() => (
    <InputCheckBox name="input" label="Name" onChange={action('changed')} isInvalid />
  )))
  .add('Checked', withInfo()(() => (
    <InputCheckBox name="input" label="Name" onChange={action('changed')} isChecked />
  )));
