import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import store from "./view/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="pmsapplication.us.auth0.com"
    clientId="d5xVsG8Hl9gpn5IYR3EULbCj1XUAJ8Bs"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "this is my identifier",
    }}
    scope="openid profile email"
  >
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Auth0Provider>
);
