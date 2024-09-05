import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
