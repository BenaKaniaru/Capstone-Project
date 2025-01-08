import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <header className=" flex flex-row bg-gray-300 drop-shadow-md p-1 items-center fixed top-0 left-0 right-0">
      <div className="w-72 py-4 ml-10">
        <span className="text-orange-500 font-black text-2xl">NerdHub</span>
      </div>
      <div className="flex-1"></div>
      <div className="w-96 flex justify-between mx-8 text-white text-lg">
        <Link to="/" className="hover:cursor-pointer hover:text-blue-500">
          Home
        </Link>

        <span className="hover:cursor-pointer hover:text-blue-500">
          Reading List
        </span>
        <span className="hover:cursor-pointer hover:text-blue-500">About</span>
        <span className="hover:cursor-pointer hover:text-blue-500">
          Log In/Sign In
        </span>
      </div>
    </header>
  );
}
