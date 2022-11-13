import NiceModal from "@ebay/nice-modal-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NiceModal.Provider>
        <App />
      </NiceModal.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
