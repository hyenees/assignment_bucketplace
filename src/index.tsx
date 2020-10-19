import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "store/configureStore";
import App from "./App";
import GlobalStyle from "styles/GlobalStyle";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
