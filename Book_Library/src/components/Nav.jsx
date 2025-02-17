import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const location = useLocation();
  return (
    <header className=" flex flex-row bg-gray-500 drop-shadow-md p-1 items-center fixed top-0 left-0 right-0">
      <div className="w-72 py-4 ml-4 md:ml-10">
        <span className="text-orange-500 font-black text-2xl">NerdHub</span>
      </div>
      <div className="flex-1"></div>
      <nav className="w-80 md:flex justify-between text-orange-500 text-lg font-semibold hidden mx-10">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "hover:cursor-pointer underline text-orange-300"
              : "hover:cursor-pointer hover:underline"
          }
        >
          Home
        </Link>

        <Link
          to="/ReadingList"
          className={
            location.pathname === "/ReadingList"
              ? "hover:cursor-pointer underline text-orange-300"
              : "hover:cursor-pointer hover:underline"
          }
        >
          Reading List
        </Link>
        <Link
          to="/UserAuth"
          className={
            location.pathname === "/UserAuth"
              ? "hover:cursor-pointer underline text-orange-300"
              : "hover:cursor-pointer hover:underline"
          }
        >
          Log In/Sign In{" "}
        </Link>
      </nav>
      {/*humburger menu icon*/}
      <button
        className="flex flex-col md:hidden hover:cursor-pointer text-white mr-4 md:mr-10 gap-1 z-5"
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
        <nav className="absolute top-16 right-0 bg-gray-500 text-orange-500 flex flex-col items-left w-40 pl-4 py-4 gap-4 font-semibold md:hidden">
          <Link to="/" className="hover:cursor-pointer hover:underline">
            <span
              onClick={() => {
                setHomeOpen(true);
              }}
            >
              {homeOpen && (
                <>
                  <span className="underline">Home</span>
                </>
              )}

              {!homeOpen && <span>Home</span>}
            </span>
          </Link>

          <Link
            to="/ReadingList"
            className="hover:cursor-pointer hover:underline"
          >
            Reading List
          </Link>
          <Link to="/UserAuth" className="hover:cursor-pointer hover:underline">
            Log In/Sign In{" "}
          </Link>
        </nav>
      )}
    </header>
  );
}
