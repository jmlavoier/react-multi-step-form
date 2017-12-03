import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SelectBox from './SelectBox';

storiesOf('SelectBox', module)
  .add('Default', () => (
    <SelectBox name="input" onChange={action('changed')} />
  ))
  .add('With options', () => {
    const newValue = 'Name';

    return (
      <SelectBox name="input" onChange={action('changed')} options={['C1', 'C2', 'C3']} />
    );
  })
  .add('With label', () => (
    <SelectBox name="input" label="Name" onChange={action('changed')} />
  ))
  .add('Invalid', () => (
    <SelectBox name="input" label="Name" onChange={action('changed')} isInvalid />
  ));
