import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { listReducer } from "./reducers/listReducer";
import { Provider } from "react-redux";
import { modalReducer } from "./reducers/modalReducer";

const reducers = combineReducers({
  lists: listReducer,
  modals: modalReducer,
});

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
