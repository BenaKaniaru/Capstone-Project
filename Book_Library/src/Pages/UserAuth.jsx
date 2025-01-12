import { useState, useEffect } from "react";
import SignIn from "../components/SignIn";
import Nav from "../components/Nav";

export default function UserAuth({ formValues, setFormValues }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      setUserData(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <div>
      <Nav />
      <div className=" flex flex-col shadow-lg items-center justify-center min-h-screen p-5 bg-gray-200">
        <div className="flex flex-col items-center justify-center">
          <SignIn
            formValues={formValues}
            setFormValues={setFormValues}
            userData={userData}
            setUserData={setUserData}
          />
        </div>
      </div>
    </div>
  );
}
