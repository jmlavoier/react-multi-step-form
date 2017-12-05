import React from 'react';
import uid from 'uid';
import { shallow, mount } from 'enzyme';

import Container from './Container';

test('Should component render text', () => {
  const text = 'text';

  const wrapper = mount(<Container>{text}</Container>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.container').text()).toEqual(text);
});
