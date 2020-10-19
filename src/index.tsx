import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "store/configureStore";
import Feed from "./Feed";
import GlobalStyle from "styles/GlobalStyle";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Feed />
  </Provider>,
  document.getElementById("root")
);
