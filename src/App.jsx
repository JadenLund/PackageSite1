import React from "react";
import { Element, Events, scroller } from "react-scroll";
import NavBar from "./assets/components/NavBar";
import About from "./assets/components/About";
import FindUs from "./assets/components/FindUs";
import BNavBar from "./assets/components/BNavBar";
import Products from "./assets/components/Products";

export default function App() {
  return (
    <div>
      <NavBar />
      <Products />
      <About />
      <Products />
      <FindUs />
      <BNavBar />
    </div>
  );
}
// ReactDOM.render(<Section />, document.getElementById("example"));
