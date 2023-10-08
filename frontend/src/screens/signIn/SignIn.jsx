import React, { useState } from "react";
import logo from "../../assets/logoo.png";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleSubmit = (e) => {
    e.preventDefault();

    name = e.target.name;
    value = e.target.value;
    // Perform form submission logic here

    // Reset form fields

    setUser({ ...user, [name]: value });
    console.log(user);
  };

  return (
    <div className=" grid   md:grid-cols-2 p-[1rem]  bg-gray-100 ">
      <div className="my-[1rem] mx-auto md:m-auto ">
        <img className="  h-[12rem] md:h-[20rem] " src={logo} alt="Workflow" />
      </div>

      <div className="min-h-screen   flex flex-col md:justify-center  ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 drop-shadow-2xl sm:rounded-lg sm:px-10">
            <div className="mb-[5rem] sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className=" text-center text-3xl font-extrabold text-gray-900">
                Sign In
              </h2>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    required
                    value={user.name}
                    onChange={handleSubmit}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={user.password}
                    onChange={handleSubmit}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="md:flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">Forgot your password?</div>
              </div>

              <div>
                <button
                  id="signin"
                  name="signin"
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
