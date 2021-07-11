import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./1_UnidirectionalDataFlow";
// import App from "./2_PropsVsState";
// import App from "./3_LiftStateUp";
// import App from "./4_ControlledVsUncontrolled";
// import App from "./5_Refs";
// import App from "./6_keys";
import App from "./7_context";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
