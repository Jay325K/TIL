// Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct label', () => {
  const label = 'Click me';
  const { getByText } = render(<Button label={label} />);

  const button = getByText(label);
  expect(button).toBeInTheDocument();
});

test('calls onClick prop when clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);

  const button = getByText('Click me');
  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalled();
});
