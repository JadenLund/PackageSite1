import React from "react";
import { Element, Events, scroller } from "react-scroll";
import NavBar from "./assets/components/NavBar";
import About from "./assets/components/About";
import FindUs from "./assets/components/FindUs";
import BNavBar from "./assets/components/BNavBar";
import Products from "./assets/components/Products";
import Home from "./assets/components/Home";

export default function App() {
  return (
    <div>
      <div className="font-lilita text-center">
        <Element className="home" id="home">
          <Home />
        </Element>
        <Element className="about" id="about">
          <About />
        </Element>
        <Element className="products" id="products">
          <Products />
        </Element>
        <Element className="find" id="find">
          <FindUs />
        </Element>

        <BNavBar />
      </div>
    </div>
  );
}
// ReactDOM.render(<Section />, document.getElementById("example"));
