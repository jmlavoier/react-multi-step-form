import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

import StepsWrapper from 'components/StepsWrapper';
import Header from './Header';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Header', module)
  .add('Default', withInfo()(() => (
    <Header title="Step 1" />
  )))
  .add('With text', withInfo()(() => (
    <Header title="Step 1" text="This step will was created to explain wha if I told you..." />
  )))
  .add('With children', withInfo()(() => (
    <Header title="Step 1" text="This step will was created to explain wha if I told you...">
      <StepsWrapper steps={4} currentStep={1} />
    </Header>
  )));
