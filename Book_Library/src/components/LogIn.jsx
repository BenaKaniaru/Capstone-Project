import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
export default function LogIn() {
  const [logInDetails, setLoginDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState();
  const [usernameError, setusernameError] = useState();
  const [loginMessage, setLoginMessage] = useState();
  function validate() {
    let isValid = true;
    if (!logInDetails.username.trim()) {
      setusernameError("username is required");
      isValid = false;
    } else if (logInDetails.username !== userData.username) {
      setusernameError("username is incorrect");
      isValid = false;
    }
    if (!logInDetails.password.trim()) {
      setPasswordError("password is required");
      isValid = false;
    } else if (logInDetails.password !== userData.password) {
      setPasswordError("Password is incorrect");
      isValid = false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setLoginMessage("successfuly logged in!");
      setLoginDetails({ username: "", email: "", password: "" });
    }

    console.log(userData);

    setTimeout(() => {
      setLoginMessage("");
    }, 3000);
  }

  return (
    <div>
      <Nav />
      <div className="w-full flex flex-col items-center mt-20">
        <h1 className="font-bold text-xl sm:text-lg md:text-xl lg:text-2xl mb-3 text-orange-500">
          Enter Log In Details
        </h1>
        <form
          action=""
          className="w-full max-w-md shadow-lg rounded-lg bg-white p-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label
              htmlFor="username"
              className="text-sm font-medium text-black mb-1"
            >
              Username
            </label>
            <input
              type="username"
              name="username"
              value={logInDetails.username}
              onChange={(e) =>
                setLoginDetails({ ...logInDetails, username: e.target.value })
              }
              className="block w-full px-3 py-2 text-sm font-light border focus:outline-none focus:ring-orange-500 focus:ring-2 focus:border-none"
            />
            <span className="text-red-500 text-sm font-medium italic">
              {usernameError}
            </span>
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="text-sm font-medium text-black mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={logInDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...logInDetails, password: e.target.value })
              }
              className="block w-full px-3 py-2 text-sm font-light border focus:outline-none focus:ring-orange-500 focus:ring-2 focus:border-none"
            />
            <span className="text-red-500 text-sm font-medium italic">
              {passwordError}
            </span>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-orange-500 text-white rounded px-3 py-1 hover:px-4 hover:bg-orange-400 transition-all">
              Log In
            </button>
          </div>
          <div className="w-full bg-gray-200 mx-auto text-sm py-1 px-3 mt-4 font-light italic">
            Don't have an account?{" "}
            <Link
              to="/SignIn"
              className="text-blue-500 ml-1 font-medium hover:cursor-pointer hover:underline not-italic"
            >
              Register
            </Link>
          </div>
        </form>
        <span className="text-green-500 text-sm font-medium italic">
          {loginMessage}
        </span>
      </div>
    </div>
  );
}
