import FadeAppear from "./graphics/FadeAppear";
import Products from "./Products";

export default function ProductShowCase() {
  return (
    <div>
      <FadeAppear>
        <h1 className="text-xxl">Products</h1>
      </FadeAppear>
      <Products />
    </div>
  );
}
