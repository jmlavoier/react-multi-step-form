import React from 'react';
import uid from 'uid';
import { shallow, mount } from 'enzyme';

import Button from './Button';

test('Should component render text', () => {
  const text = 'text';

  const wrapper = mount(<Button text={text} onClick={() => {}} />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.button').text()).toEqual(text);
});

test('Should component call onClick', () => {
  const text = 'text';
  const mockClick = jest.fn();

  const wrapper = mount(<Button text={text} onClick={mockClick} />);

  wrapper.simulate('click');
  expect(mockClick).toHaveBeenCalled();
});
