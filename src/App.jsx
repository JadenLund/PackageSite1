import React from "react";
import { Element, Events, scroller } from "react-scroll";
import About from "./assets/components/About";
import FindUs from "./assets/components/FindUs";
import BNavBar from "./assets/components/BNavBar";
import Home from "./assets/components/Home";
import ProductShowCase from "./assets/components/ProductShowCase";
export default function App() {
  return (
    <div>
      <div className=" text-center text-gray-300">
        <Element className="home" id="home">
          <Home />
        </Element>
        <Element className="about" id="about">
          <About />
        </Element>
        <Element className="products" id="products">
          <ProductShowCase />
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
