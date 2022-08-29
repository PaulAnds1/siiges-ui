import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../../../src/components/Input/Input';

describe('Tests for the general input', () => {
  test('Test Input component render', () => {
    const component = render(<Input id="test" label="test" name="test" type="text" auto="user" />);
    waitFor(() => expect(component).toBeInTheDocument());
  });

  test('Test the input when writting text', async () => {
    const component = render(<Input id="test" label="test" name="test" type="text" auto="user" />);
    const input = component.getByLabelText('test');
    await userEvent.type(input, 'pruebasxd');

    waitFor(() => expect(input.value).toEqual('pruebasxd'));
  });
});