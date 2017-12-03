import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

import App from './App';

// addon-info
setDefaults({
  source: true,
});

storiesOf('App', module)
  .add('default', withInfo()(() => (
    <App />
  )));
