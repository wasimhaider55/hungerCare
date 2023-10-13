import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logoo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleSubmit = (e) => {
    name = e.target.name;
    value = e.target.value;
    // Perform form submission logic here

    // Reset form fields

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, phone, email, password, cpassword } = user;

    const res = await fetch("/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Registration Successfully");
      console.log("Registration Successfully");
    }
    navigate("/signin");
  };

  return (
    <div className="flex justify-center items-center p-1 h-screen ">
      <div className=" md:flex w-full  md:w-[60%] justify-center  items-center shadow-xl rounded-lg bg-[#004d73] ">
        <div className="flex flex-col w-full justify-center items-center">
          <img
            className="h-[12rem] md:h-[20rem] md:w-[20rem]"
            src={logo}
            alt="Workflow"
          />
        </div>
        <div className="  flex flex-col w-full justify-center bg-slate-100 rounded-r-lg ">
          <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <div className=" py-8 px-4  sm:rounded-lg sm:px-10">
              <div className="flex space-x-24 mb-4">
                <h2 className="  text-3xl font-extrabold text-gray-700">
                  SignUp
                </h2>
                <p className="text-gray-500">
                  already have an account{" "}
                  <Link to="/signin">
                    <span className="text-blue-600">SignIn</span>
                  </Link>
                </p>
              </div>
              <form method="POST" className="space-y-6">
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    value={user.name}
                    autoComplete="off"
                    onChange={handleSubmit}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="off"
                    placeholder="Phone"
                    required
                    value={user.phone}
                    onChange={handleSubmit}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    value={user.email}
                    onChange={handleSubmit}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                    value={user.password}
                    onChange={handleSubmit}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="mt-1">
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="cpassword"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    required
                    value={user.cpassword}
                    onChange={handleSubmit}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="pt-5">
                  <button
                    id="signup"
                    name="signup"
                    type="submit"
                    onClick={PostData}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign Up
                  </button>
                  <div className=" w-full text-center border-b-2 border-text-primary  my-4">
                    <span className=" px-4 py-3 text-slate-500  bg-slate-100 ">
                      or
                    </span>
                  </div>

                  <div className=" justify-center ">
                    <button className="w-full flex  justify-center py-2 border-b border-blue-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm  ">
                      <FcGoogle className="text-2xl" />
                      <span>SignUp with Google</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
