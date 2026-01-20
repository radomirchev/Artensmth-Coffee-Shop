import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import InventoryPage from './inventory-page';
import 'element-internals-polyfill';

test('renders InventoryPage component', () => {
  const wrapper = render(<InventoryPage />);
  expect(wrapper).toBeTruthy();
});