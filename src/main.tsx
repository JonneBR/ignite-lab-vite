import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";

import App from "./App";
import "./index.css";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
