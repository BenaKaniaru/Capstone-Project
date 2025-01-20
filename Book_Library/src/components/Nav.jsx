import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=" flex flex-row bg-gray-500 drop-shadow-md p-1 items-center fixed top-0 left-0 right-0">
      <div className="w-72 py-4 ml-10">
        <span className="text-orange-500 font-black text-2xl">NerdHub</span>
      </div>
      <div className="flex-1"></div>
      <nav className="w-96 md:flex justify-between text-white text-lg hidden mx-10">
        <Link to="/" className="hover:cursor-pointer hover:text-blue-500">
          Home
        </Link>

        <Link
          to="/ReadingList"
          className="hover:cursor-pointer hover:text-blue-500"
        >
          Reading List
        </Link>
        <span className="hover:cursor-pointer hover:text-blue-500">About</span>
        <Link
          to="/UserAuth"
          className="hover:cursor-pointer hover:text-blue-500"
        >
          Log In/Sign In{" "}
        </Link>
      </nav>
      {/*humburger menu icon*/}
      <button
        className="flex flex-col md:hidden hover:cursor-pointer text-white mr-10 gap-1 z-5"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {!menuOpen && (
          <>
            <span className="h-1 w-6 bg-white text-yellow-500"></span>
            <span className="h-1 w-6 bg-white"></span>
            <span className="h-1 w-6 bg-white"></span>
          </>
        )}

        {menuOpen && (
          <>
            <span className="h-1 w-6 bg-white rotate-45 translate-y-1 transform"></span>
            <span className="h-1 w-6 hidden"></span>
            <span className="h-1 w-6 bg-white -rotate-45 -translate-y-1 transform"></span>
          </>
        )}
      </button>
      {/*mobile navigation for small screen sizes*/}
      {menuOpen && (
        <nav className="absolute top-16 right-0 bg-gray-700 text-white flex flex-col items-left w-40 pl-4 py-4 gap-4 md:hidden">
          <Link to="/" className="hover:cursor-pointer hover:text-blue-500">
            Home
          </Link>

          <Link
            to="/ReadingList"
            className="hover:cursor-pointer hover:text-blue-500"
          >
            Reading List
          </Link>
          <span className="hover:cursor-pointer hover:text-blue-500">
            About
          </span>
          <Link
            to="/UserAuth"
            className="hover:cursor-pointer hover:text-blue-500"
          >
            Log In/Sign In{" "}
          </Link>
        </nav>
      )}
    </header>
  );
}
