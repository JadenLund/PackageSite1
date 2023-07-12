import Products from "./Products";
import FadeAppear from "./graphics/FadeAppear";
import Testimage from "../images/Testimage.png.png";
export default function Home() {
  return (
    <div className="h-screen">
      <FadeAppear>
        <h1 className="text-xxl py-1.5">Brand Name</h1>
      </FadeAppear>
      <img src={Testimage} />
      {/* <Products /> */}
    </div>
  );
}
