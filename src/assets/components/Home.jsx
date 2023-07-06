import Products from "./Products";
import FadeRight from "./graphics/FadeRight";

export default function Home() {
  return (
    <div className="h-screen">
      <FadeRight>
        <h1 className="text-xxl py-1.5">Brand Name</h1>
      </FadeRight>

      <Products />
    </div>
  );
}
