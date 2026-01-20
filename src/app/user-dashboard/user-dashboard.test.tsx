import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import UserDashboard from './user-dashboard';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders UserDashboard component', () => {
  const wrapper = render(<UserDashboard />);
  expect(wrapper).toBeTruthy();
});