import React from 'react';
import uid from 'uid';
import { shallow, mount } from 'enzyme';

import Form from './Form';

test('Should component render text', () => {
  const text = 'text';

  const wrapper = mount(<Form text={text}></Form>);

  expect(wrapper).toMatchSnapshot();
});
