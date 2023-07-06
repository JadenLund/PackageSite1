import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./assets/components/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <div className="grid grid-cols-5 bg-gray-900">
      <div></div>
      <div className="col-span-3">
        <App />
      </div>
      <div></div>
    </div>
  </React.StrictMode>
);
