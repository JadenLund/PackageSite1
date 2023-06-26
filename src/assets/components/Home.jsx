import Products from "./Products";

export default function Home() {
  return (
    <div className="h-screen">
      {/* get each thing to be full window height, but not width */}
      <Products />
    </div>
  );
}
