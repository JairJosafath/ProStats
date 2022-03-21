import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components";
import "rsuite/dist/rsuite.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Authenticator } from "@aws-amplify/ui-react";

const Backdrop = styled.div`
  background: var(--primary-col);
`;

ReactDOM.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();