import Brands from "./Brands";
import FadeRight from "./graphics/FadeRight";
import GradiantAppear from "./graphics/GradiantAppear";
export default function About() {
  return (
    <div className="h-screen">
      <FadeRight>
        <h1 className="text-xxl">WHO WE ARE</h1>
      </FadeRight>
      <FadeRight>
        <p className="my-1.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </FadeRight>
      <GradiantAppear>
        <Brands />
      </GradiantAppear>
      <img src="https://media.gettyimages.com/id/1449651807/photo/many-different-flavours-of-e-liquid-vapes-in-a-vape-shop.jpg?s=612x612&w=gi&k=20&c=aHlAJYm63v5gE-ejoFtuuBuhc2Lq7L6Ujt9fuU0myoI=" />
    </div>
  );
}
