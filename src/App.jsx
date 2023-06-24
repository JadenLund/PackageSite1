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
      <div className="font-lilita text-center">
        <Element>
          <Products className="home" id="home" />
        </Element>
        <About className="about" id="about" />
        <Products className="products" id="products" />
        <FindUs className="find" id="find" />
        <BNavBar />
      </div>
    </div>
  );
}
// ReactDOM.render(<Section />, document.getElementById("example"));
