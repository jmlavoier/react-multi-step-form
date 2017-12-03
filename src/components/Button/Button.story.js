import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import Button from './Button';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Button', module)
  .add('With text', withInfo()(() => (
    <Button text="Button" />
  )))
  .add('onClick', withInfo()(() => (
    <Button onClick={action('clicked')} text="Click here" />
  )));
