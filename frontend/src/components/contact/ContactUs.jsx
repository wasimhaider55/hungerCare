import React, { useState } from "react";
import Getintouch from "./Getintouch";
import kachaPakh from "../../assets/kachaPakh.png";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      {/* Contact Us section open */}
      <div style={{ backgroundImage: `url(${kachaPakh})` }} className="relative w-full h-32 sm:h-52 bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-10 sm:pt-20 md:pl-20 pl-10 ">
          <h1 className=""> Contact Us </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Contact Us section Closed */}
      <section className="py-10">
        {/* Getintouch render start  */}
        <div className=" grid   md:grid-cols-2 p-[1rem]  ">
          <div className=" place-content-center  md:ml-[5rem] ">
            <Getintouch />
          </div>
          {/* Getintouch render end  */}

          {/* Contact form start  */}
          <div className="  flex flex-col  ">
            <div className=" sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-gray-100 pt-6 px-4 drop-shadow-2xl sm:rounded-lg sm:px-10">
                <form
                  className="space-y-6"
                  action="https://getform.io/f/c3f8e7f4-7a2e-453b-a3e9-e76833c37731"
                  method="POST"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="textj"
                        autoComplete="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
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
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        id="message"
                        name="message"
                        rows="5"
                        autoComplete="message"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter your message"
                      >
                      </textarea>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full mb-[2rem]   py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Contact form end  */}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
