import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

import StepsWrapper from './StepsWrapper';

// addon-info
setDefaults({
  source: true,
});

storiesOf('StepsWrapper', module)
  .add('Default', withInfo()(() => (
    <StepsWrapper steps={3} />
  )))
  .add('Current step 1', withInfo()(() => (
    <StepsWrapper steps={3} currentStep={1} />
  )))
  .add('Current step 2', withInfo()(() => (
    <StepsWrapper steps={3} currentStep={2} />
  )))
  .add('Current step 3', withInfo()(() => (
    <StepsWrapper steps={3} currentStep={3} />
  )));

