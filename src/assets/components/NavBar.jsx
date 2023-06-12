import { Link } from "react-scroll";
export default function NavBar() {
  const durationFn = function (deltaTop) {
    return deltaTop;
  };
  return (
    <nav className="sticky z-10 top-0 font-semibold text-xl bg-nature-green grid grid-cols-3 items-center">
      <a href="home" className="flex no-underline text-black">
        <img
          className="h-8 w-8 "
          src="https://www.freeiconspng.com/thumbs/letter-j-icon-png/letter-j-icon-png-26.png"
        />
        <span>aden Lund</span>
      </a>
      <div className="flex sm:justify-center space-x-8 ">
        {[
          ["Home", "home"],
          ["About", "about"],
          ["Products", "products"],
          ["Find Us", "find"],
        ].map(([title, url]) => (
          <Link
            to={url}
            duration={durationFn}
            className="p-3 focus:bg-clicked-green hover:bg-selected-green no-underline text-black"
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
