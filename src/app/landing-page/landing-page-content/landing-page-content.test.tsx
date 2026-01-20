import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import LandingPageContent from './landing-page-content';
import 'element-internals-polyfill';

test('renders LandingPageContent component', () => {
  const wrapper = render(<LandingPageContent />);
  expect(wrapper).toBeTruthy();
});