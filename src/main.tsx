import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { APP_DESCRIPTION, APP_TITLE } from "./utils/constants.ts";
import { Helmet } from "react-helmet";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Helmet>
      <title>{APP_TITLE}</title>
      <meta name="description" content={APP_DESCRIPTION} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <App />
  </StrictMode>
);
