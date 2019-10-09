import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Suspense fallback={<p>Loading...</p>}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </Suspense>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
