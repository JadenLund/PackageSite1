export default function Contact() {
  return (
    <div className="w-full max-w-xs">
      <h1>Contact us!</h1>
      <form className="bg-white shadow-md rounded px-8 pt-1 pb-8 mb-4">
        <div className="my-4 space-y-2">
          {["Email", "Subject"].map((title) => (
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={title}
              type="text"
              placeholder={title}
            />
          ))}
          <div class="relative w-full md:w-1/3">
            <select
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              id="grid-state"
            >
              <option>Loaction</option>
              <option>Loaction</option>
              <option>Loaction</option>
            </select>
          </div>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Message"
            type="text"
            placeholder="Message"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send!
        </button>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Brand Corp. All rights reserved.
      </p>
    </div>
  );
}

/*<button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Location
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {["Location", "Location", "Location"].map((title) => (
              <li>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div> */
{
  /* <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 mx-1 leading-tight" type="checkbox" />
            <span className="text-sm">Send me email alerts!</span>
          </label> */
}
