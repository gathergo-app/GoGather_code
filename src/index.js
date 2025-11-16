import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import your styles once here
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
