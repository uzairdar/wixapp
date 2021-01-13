import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserReducer from "./redux/reducers/UserReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
const reducers = combineReducers({
  User: UserReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : (f) => f
  )
);
//const a = "uzair";
// store.dispatch(loadUser());
export const StoreContext = React.createContext();
ReactDOM.render(
  <React.StrictMode>
    {/* <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
