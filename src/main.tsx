import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Preflight, ThemeProvider, createGlobalStyle } from "@xstyled/styled-components";
import { theme } from "./theme";


const GlobalStyle = createGlobalStyle`  
  html, body {
    background-color: background;
    color: primary;
    font-family: body;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
