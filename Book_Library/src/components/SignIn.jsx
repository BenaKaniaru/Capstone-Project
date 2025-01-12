import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function SignIn({
  formValues,
  setFormValues,
  userData,
  setUserData,
}) {
  const [errors, setErrors] = useState({});
  const [successMessage, setsuccessMessage] = useState("");

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formValues.username.trim()) {
      newErrors.username = "Username is required!";
      isValid = false;
    } else if (formValues.username.trim().length < 4) {
      newErrors.username = "Username must be at least 4 characters long!";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!emailRegex.test(formValues.email.trim())) {
      newErrors.email = "Provide a valid email!";
      isValid = false;
    }

    if (!formValues.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formValues.password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!formValues.confirm.trim()) {
      newErrors.confirm = "Please confirm your password!";
    } else if (formValues.password !== formValues.confirm) {
      newErrors.confirm = "Your password does not match!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setsuccessMessage("Form submitted successfully");

      setUserData(formValues);
      setFormValues({ username: "", email: "", password: "", confirm: "" });
    }

    setTimeout(() => {
      setsuccessMessage("");
    }, 3000);
  };

  /*const handleChange = (e) => {
    setFormValues({...formValues, e.target.value});
  }*/ return (
    <div>
      <Nav />
      <div className="w-full flex flex-col items-center mt-20">
        <h1 className="font-bold text-xl text-orange-500 sm:text-lg md:text-xl lg:text-2xl mb-3">
          Registration Form
        </h1>
        <form
          className="w-full p-6 rounded-lg shadow-lg bg-white max-w-md "
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label
              htmlFor="username"
              className="font-medium block text-sm text-black mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              placeholder="username"
              className="w-full px-3 py-1 focus:outline-none focus:ring-orange-500 focus:ring-2 border focus:border-none"
              onChange={(e) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
            />
            <span className="text-sm text-red-600">{errors.username}</span>
          </div>
          <div className=" mb-3">
            <label className="font-medium block text-black mb-1 text-sm">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              placeholder="email"
              className="w-full px-3 py-1 focus:outline-none focus:ring-orange-500 focus:ring-2 border focus:border-0"
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
            <span className="text-sm text-red-600">{errors.email}</span>
          </div>

          <div className="mb-3">
            <label className="font-medium text-sm block text-black mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              placeholder="password"
              className="w-full px-3 py-1 focus:outline-none focus:ring-orange-500 focus:ring-2 border focus:border-0"
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
            <span className="text-sm text-red-600">{errors.password}</span>
          </div>

          <div className="mb-3">
            <label className="font-medium text-sm block text-black mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              value={formValues.confirm}
              placeholder="password"
              className="w-full px-3 py-1 focus:outline-none focus:ring-orange-500 focus:ring-2 border focus:border-0"
              onChange={(e) =>
                setFormValues({ ...formValues, confirm: e.target.value })
              }
            />
            <span className="text-sm text-red-600">{errors.confirm}</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            {successMessage && (
              <span className="text-green-500 italic">{successMessage}</span>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-orange-500 py-1 px-8 rounded-lg hover:bg-orange-400 mt-3 transition-all"
            >
              Submit
            </button>
          </div>

          <div className="bg-gray-100 mt-3 px-3 py-3 text-sm font-light text-black italic">
            <span>
              Already have an account?{" "}
              <Link
                to="/LogIn"
                className="text-blue-500 font-medium hover:underline transition-all not-italic"
              >
                sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
