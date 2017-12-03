import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo, setDefaults } from '@storybook/addon-info';

import SelectBox from './SelectBox';

// addon-info
setDefaults({
  source: true,
});

storiesOf('SelectBox', module)
  .add('Default', withInfo()(() => (
    <SelectBox name="input" onChange={action('changed')} />
  )))
  .add('With options', withInfo()(() => {
    const newValue = 'Name';

    return (
      <SelectBox name="input" onChange={action('changed')} options={['C1', 'C2', 'C3']} />
    );
  }))
  .add('With label', withInfo()(() => (
    <SelectBox name="input" label="Name" onChange={action('changed')} />
  )))
  .add('Invalid', withInfo()(() => (
    <SelectBox name="input" label="Name" onChange={action('changed')} isInvalid />
  )));
