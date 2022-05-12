import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@material-ui/core";

// Sentry testing dependencies
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://11481d6138af4c09a2753483c35ae712@o1214838.ingest.sentry.io/6355620",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const theme = createTheme({
  palette: {
    primary: {
      light: "#b1dec6",
      main: "#72bb94",
      dark: "#468a66",
      contrastText: "#fff",
    },
    secondary: {
      main: "#585c69",
    },
  },

  typography: {
    subtitle1: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 500,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
