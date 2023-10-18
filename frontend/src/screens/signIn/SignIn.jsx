import React, { useState } from "react";
import logo from "../../assets/logoo.png";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/LogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("LogIn Successfully");
      console.log("LogIn  Successfully");
    }
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center p-1 h-screen  ">
      <div className=" md:flex w-full  md:w-[60%] justify-center items-center   shadow-xl rounded-lg bg-[#004d73] ">
        <div className="flex flex-col w-full justify-center items-center">
          <img
            className="h-[12rem] md:h-[20rem] md:w-[20rem]"
            src={logo}
            alt="Workflow"
          />
        </div>
        <div className="  flex flex-col w-full justify-center bg-slate-100 rounded-r-lg ">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="  py-8 px-4  sm:rounded-lg sm:px-10 ">
              <div className="flex space-x-24 mb-4">
                <h2 className="  text-3xl font-extrabold text-gray-700">
                  SignIn
                </h2>
                <p className="text-gray-500">
                  don't have an account{" "}
                  <Link to="/signup">
                    <span className="text-blue-600">SignUp</span>
                  </Link>
                </p>
              </div>
              <form method="POST" className="space-y-6">
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <p className="flex justify-end text-gray-500">
                    Forgot Password
                  </p>
                </div>

                <div className="pt-5">
                  <button
                    id="signup"
                    name="signup"
                    type="submit"
                    onClick={userLogin}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign In
                  </button>
                </div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
