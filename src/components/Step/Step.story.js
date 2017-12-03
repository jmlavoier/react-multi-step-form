import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

import Step from './Step';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Step', module)
  .add('Default', withInfo()(() => (
    <Step />
  )))
  .add('Pass 2', withInfo()(() => (
    <Step pass={2} />
  )))
  .add('Completed', withInfo()(() => (
    <Step isCompleted />
  )));

