import Products from "./Products";

export default function Home() {
  return (
    <div className="h-full">
      {/* get each thing to be full window height, but not width */}
      <Products />
    </div>
  );
}
