import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const DonateNow = () => {
  return (
    <main id="donateNow">
      {/* Donate Now section open */}
      <div className=' relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute sm:pt20 pt-10 md:pl-20 pl-10 ">
          <h1 className=" text-white text-4xl font-bold  "> Donate Now </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
          <p className="text-2xl text-white pt-5">
            Help feed hungry people today
          </p>
        </div>
      </div>
      {/* Donate Now section Closed */}

      {/* important note section */}
      <div>
        <div className="py-10 lg:px-24 md:px-16 sm:px-12 px-5 text-justify">
          <h1 className="text-2xl font-bold">IMPORTANT NOTE</h1>
          <p className=" font-bold py-5">
            We accept all types of charity including Zakat, Sadaqah, Fitrana,
            Kafarah, General Charity, and we make sure to utilize these
            charities in the relevant sectors according to Islamic Shariah.
          </p>
          <p className="pb-5">
            You can either donate towards anyone of our specific causes, or you
            may leave the choice of utilizing your charity on our discretion and
            we will make the best use of your charity in the most needed causes.
            For list of our help sectors, please visit Our Causes link.
          </p>
          <p>
            If you would like to inform us after donating, or if you would like
            to discuss with us about your charity or if you have any question
            before making donation to our Foundation, please feel free to
            contact us either on our email{" "}
            <strong>wasimhaider2022@gmail.com</strong> or contact our Founder &
            President Mr. Wasim Haider on his official Contact / WhatsApp number{" "}
            <strong>+923135653685</strong>.
          </p>
        </div>
      </div>

      {/* Donate Food Now section Open */}
      <div className="w-full sm:h-72 h-80 bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-gray-700 my-10 text-center">
        <div className="pt-10  px-4 ">
          <h1 className=" text-4xl font-bold">
            {" "}
            Have you surplus food to donate?
          </h1>
          <p className="  opacity-70 text-2xl font-bold pt-3">
            If you are a business with surplus food, please find out what we can
            take
          </p>
          <Link to="/DonateFood">
            <button className="bg-pink-600 text-white  px-6 py-2 rounded-full mx-auto sm:mt-16 mt-10 hover:bg-pink-700 flex">
              <span className="my-auto pr-1">
                <AiFillHeart />
              </span>
              Donate Food
            </button>
          </Link>
        </div>
      </div>
      {/* Donate Food  Now section closed */}

      {/* Donate Money Now  section Open */}
      <div className="w-full sm:h-72 h-80 bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-gray-700 my-10 text-center">
        <div className="pt-10 pl-3 ">
          <h1 className=" text-4xl font-bold"> Have you money to donate?</h1>
          <p className="  opacity-70 text-2xl font-bold pt-3 pr-3">
            if you want to donate money please find out what we can take.
          </p>
          <Link to="/DonateMoney">
            <button className="bg-pink-600 text-white  px-6 py-2 rounded-full mx-auto sm:mt-16 mt-10 hover:bg-pink-700 flex">
              <span className="my-auto pr-1">
                <AiFillHeart />
              </span>
              Donate Money
            </button>
          </Link>
        </div>
      </div>
      {/* Donate Money Now  section closed */}
    </main>
  );
};

export default DonateNow;
