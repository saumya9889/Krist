import React from "react";
import ReactDOM from "react-dom/client";
import "./assests/styles/globle.scss";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
