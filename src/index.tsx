import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './shared/utils/theme';
import Router from './pages/_router';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './states';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import ThemeContextProvider from './shared/theme-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SWRConfig } from 'swr';
import { apiClient } from './lib';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

enableMocking().then(() => {
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeContextProvider>
              <Toaster position="top-right" reverseOrder={false} />
              <SWRConfig
                value={{
                  fetcher: (resource, init) =>
                    apiClient.get(resource, init).then((res) => res.data),
                }}
              >
                <BrowserRouter>
                  <Router />
                </BrowserRouter>
              </SWRConfig>
            </ThemeContextProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Test
