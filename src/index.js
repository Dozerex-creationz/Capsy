import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserView, MobileView } from "react-device-detect";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/rootReducer";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserView>
      <App />
    </BrowserView>
    <MobileView>
      <h1>This page is only compatible in desktop mode</h1>
    </MobileView>
  </Provider>
);
