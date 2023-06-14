import React from "react";
import { Element, Events, scroller } from "react-scroll";
import NavBar from "./assets/components/NavBar";
import TestContainer from "./assets/components/CarouselContainer";
import About from "./assets/components/About";
import FindUs from "./assets/components/FindUs";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo(offset) {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
        offset: 50,
      })
    );
  }

  render() {
    return (
      <div>
        <NavBar />
        <About/>
        <FindUs/>
      </div>
    );
  }
}
// ReactDOM.render(<Section />, document.getElementById("example"));
