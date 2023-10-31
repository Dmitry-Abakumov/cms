import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// import pageInformation from "./page-information.json";

import "./index.css";

// const baseName = `/${pageInformation.find(({ order }) => order === 0).id}`;

// console.log(baseName);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/cms">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
