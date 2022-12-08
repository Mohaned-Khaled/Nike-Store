import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid white",
            padding: "16px",
            color: "black",
            backgroundColor: "rgb(255 255 255 / 0.8)",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
