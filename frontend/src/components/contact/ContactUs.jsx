import React, { useState } from "react";
import Getintouch from "./Getintouch";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    console.log("Name:", name);
    console.log("Phone Number:", phone);
    console.log("Email:", email);
    console.log("Text:", text);

    // Reset form fields
    setName("");
    setPhone("");
    setEmail("");
    setText("");
  };

  return (
    <div className=" pt-20">
      {/* Contact Us section open */}
      <div className='w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
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
                <form className="space-y-6 " onSubmit={handleSubmit}>
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
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    {/* // Problem in Ifram */}
                    <iframe
                      title="reCAPTCHA"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LffYKcdAAAAACqzwPgftuOWXbgoKkh24VMc7CLs&amp;co=aHR0cHM6Ly93d3cudGFyc2ZvdW5kYXRpb24ub3JnLnBrOjQ0Mw..&amp;hl=en&amp;v=iZWPJyR27lB0cR4hL_xOX0GC&amp;size=normal&amp;cb=fq3xx2mrghtf"
                      role="presentation"
                      height={78}
                      width={304}
                      name="a-xgmxr86au6ro"
                      frameborder="0"
                      className="my-[1rem] "
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                    ></iframe>
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
