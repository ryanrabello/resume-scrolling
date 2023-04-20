import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Preflight, defaultTheme, ThemeProvider, createGlobalStyle } from "@xstyled/styled-components";

const theme = {
  ...defaultTheme,
  // Customize your theme here
  fonts: {
    body: `'Inter', sans-serif`,
    heading: "Cormorant Garamond",
  },
  defaultColorModeName: "dark",
};

console.log(theme);

const GlobalStyle = createGlobalStyle`  
  html, body {
    background-color: #282828;
    color: rgba(255, 255, 255, 0.87);
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
