import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/utils/theme";
import Router from "./pages/_router";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./states";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "./shared/theme-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ThemeContextProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ThemeContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
