import Products from "./Products";
import FadeAppear from "./graphics/FadeAppear";

export default function Home() {
  return (
    <div className="h-screen">
      <FadeAppear>
        <h1 className="text-xxl py-1.5">Brand Name</h1>
      </FadeAppear>

      <Products />
    </div>
  );
}
