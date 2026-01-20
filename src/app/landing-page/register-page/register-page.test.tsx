import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import RegisterPage from './register-page';
import 'element-internals-polyfill';

test('renders RegisterPage component', () => {
  const wrapper = render(<RegisterPage />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});