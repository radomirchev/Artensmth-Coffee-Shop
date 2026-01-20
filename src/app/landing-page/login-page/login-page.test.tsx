import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import LoginPage from './login-page';
import 'element-internals-polyfill';

test('renders LoginPage component', () => {
  const wrapper = render(<LoginPage />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});