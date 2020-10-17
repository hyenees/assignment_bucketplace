import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "store/configureStore";
import Feed from "./Feed";
import GlobalStyle from "styles/GlobalStyle";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} />
    <GlobalStyle />
    <Feed />
  </Provider>,
  document.getElementById("root")
);
