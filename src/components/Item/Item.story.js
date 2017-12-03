import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

import Item from './Item';

// addon-info
setDefaults({
  source: true,
});

storiesOf('Item', module)
  .add('default', withInfo()(() => (
    <Item />
  )));
