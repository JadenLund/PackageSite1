import IconBrand from "../images/IconBrand.jpg";
//Marquee of brands the shop works with
export default function Brands() {
  return (
    <div class="relative flex overflow-x-hidden h-w">
      <div class="bg-slate-500 py-12 animate-marquee whitespace-nowrap flex items-center justify-evenly object-scale-down">
        <span class="text-4xl mx-4">Company 1</span>
        <span class="text-4xl mx-4">Company 2</span>
        <span class="text-4xl mx-4">Company 3</span>
        <span class="text-4xl mx-4">Company 4</span>
      </div>
      <div class="bg-slate-500 py-12 animate-marquee whitespace-nowrap flex items-center justify-evenly object-scale-down">
        <span class="text-4xl mx-4">Company 1</span>
        <span class="text-4xl mx-4">Company 2</span>
        <span class="text-4xl mx-4">Company 3</span>
        <span class="text-4xl mx-4">Company 4</span>
      </div>
    </div>
  );
}
