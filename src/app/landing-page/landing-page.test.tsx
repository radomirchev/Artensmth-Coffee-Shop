import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import LandingPage from './landing-page';
import 'element-internals-polyfill';

test('renders LandingPage component', () => {
  const wrapper = render(<LandingPage />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});