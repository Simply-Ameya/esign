import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Documents from "./components/Documents";
import Sign from "./components/Documents/Sign";
import { createStore } from "redux";
import combinedReducer from "./reducers/combinedReducer";
import { Provider } from "react-redux";

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/esign/login" element={<Login />} />
        <Route exact path="/esign/register" element={<Register />} />
        <Route exact path="/esign/documents/all" element={<Documents />} />
        <Route exact path="/esign/request/:id" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
