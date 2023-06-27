import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./assets/components/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <div class="grid grid-cols-5 sticky ">
      <div>01</div>
      <div className="col-span-3">
        <App />
      </div>
      <div>09</div>
    </div>
  </React.StrictMode>
);
