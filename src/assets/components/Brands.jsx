import IconBrand from "../images/IconBrand.jpg";
//Marquee of brands the shop works with
export default function Brands() {
  return (
    <div class="relative flex overflow-x-hidden">
      <div class="py-12 animate-marquee whitespace-nowrap">
        <span class="text-4xl mx-4">Marquee Item 1</span>
        <span class="text-4xl mx-4">Marquee Item 2</span>
        <span class="text-4xl mx-4">Marquee Item 3</span>
        <span class="text-4xl mx-4">Marquee Item 4</span>
        <span class="text-4xl mx-4">Marquee Item 5</span>
      </div>
    </div>
  );
}
