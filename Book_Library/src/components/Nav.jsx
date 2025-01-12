import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <header className=" flex flex-row bg-gray-500 drop-shadow-md p-1 items-center fixed top-0 left-0 right-0">
      <div className="w-72 py-4 ml-10">
        <span className="text-orange-500 font-black text-2xl">NerdHub</span>
      </div>
      <div className="flex-1"></div>
      <div className="w-96 md:flex justify-between text-white text-lg hidden mx-10">
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

        {/*humburger menu icon*/}
        <div className="flex md:hidden hover:cursor-pointer text-white mx-4">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
