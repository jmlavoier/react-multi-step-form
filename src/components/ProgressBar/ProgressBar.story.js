import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

import ProgressBar from './ProgressBar';
// addon-info
setDefaults({
  source: true,
});

storiesOf('ProgressBar', module)
  .add('Default', withInfo({})(() => (
    <ProgressBar />
  )))
  .add('Duration .5s', withInfo({})(() => (
    <ProgressBar duration=".5s" />
  )));
