export default function Contact() {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="my-4 space-y-2">
          {["Email", "Subject", "Location", "Message"].map((title) => (
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={title}
              type="text"
              placeholder={title}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 mx-1 leading-tight" type="checkbox" />
            <span className="text-sm">Send me email alerts!</span>
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Brand Corp. All rights reserved.
      </p>
    </div>
  );
}
