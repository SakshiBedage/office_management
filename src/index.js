import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import { AxiosInterceptor } from "./serviceUtil/AxiosInterceptor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <AuthContextProvider>
      <AxiosInterceptor> */}
    <App />
    {/* </AxiosInterceptor>
    </AuthContextProvider> */}
  </BrowserRouter>
);
