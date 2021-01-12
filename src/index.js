import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserReducer from "./redux/reducers/UserReducer";
import GigReducer from "./redux/reducers/GigReducer";

import { loadUser } from "./redux/ActionCreators";
// const reducers = combineReducers({
//   User: UserReducer,
//   Gigs: GigReducer,
// });

// const store = createStore(reducers, applyMiddleware(thunk));
// store.dispatch(loadUser());

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
