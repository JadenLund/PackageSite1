import FadeRight from "./graphics/FadeRight";
import Products from "./Products";

export default function ProductShowCase() {
  return (
    <div>
      <FadeRight>
        <h1 className="text-xxl">Products</h1>
      </FadeRight>
      <Products />
    </div>
  );
}
