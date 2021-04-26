import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App2 from "./App2";
import App3 from "./App3";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <App3 />
  </StrictMode>,
  rootElement
);
