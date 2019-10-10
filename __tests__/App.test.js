import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from 'utils/testUtils';
import '@testing-library/jest-dom';
import 'setupTest.js';
import App from 'App';
import Landing from 'components/landing/Landing';
import AvatarList from 'components/avatar/AvatarList';
import axiosMock from 'axios';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('it displays the title', () => {
  const { getByText } = render(<App />);
  const heading = getByText('Loading App...');
});

it('matches snapshot', () => {
  const { asFragment } = render(<AvatarList />);
  expect(asFragment()).toMatchSnapshot();
});

test('loads and displays avatars', async () => {
  const url = '/greeting';
  const { getByText, getByTestId } = render(<AvatarList />);

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' }
  });
});
