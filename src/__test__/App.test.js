import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'setupTest.js';
import App from 'App';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('it displays the title', () => {
  const { getByTestId } = render(<App />);
  const heading = getByTestId('title');
  expect(heading).toBe('Cocoppa Generator');
});
