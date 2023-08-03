import React from "react";
import { Link } from "react-router-dom";

const DonateFood = () => {
  return (
    <main id="DonateFood" className="w-full py-20  bg-gray-200">
      {/* Donate Food section open */}
      <div className='w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className="pt-20 md:pl-20 pl-10 ">
          <h1 className=" text-white text-4xl font-bold  ">
            {" "}
            Donate Food Now{" "}
          </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
          <p className="text-2xl text-white pt-5">
            Help Us So We Can Kill Hunger
          </p>
        </div>
      </div>
      {/* Donate Food section Closed */}
      {/* Form  */}
      <div className="p-1">
        <div className="w-full md:w-[70%] md:mx-auto my-[6rem] ">
          {/* section Green  */}
          <div className="w-full min-h-screen bg-[#5bb132] rounded-t-lg">
            <div className="mx-[2rem] py-[2rem] text-white flex flex-col gap-5">
              <h1 className="text-3xl">Food Donation Form</h1>
              <p>
                Thank you for your interest in donating food to Spogmi
                foundation! Please use this form to provide information on your
                food donation then our team will get back to you as soon as we
                can. If you have any questions, or would prefer to speak to us
                directly, please email food@hunger.org.uk or call us on 0207 041
                8491.
              </p>
              {/* 1st ul  */}
              <p className="text-2xl">Guidelines for food donations: </p>
              <ul className="list-disc list-inside lg:whitespace-pre  pl-5 ">
                <li>Unopened, in its original packaging. </li>
                <li>
                  Have labels in English with ingredients, allergens and
                  best-before/use-by dates.
                </li>
                <li>
                  We can collect food past its best before date and ideally food
                  will have 1-2 days before its use by date to allow for
                  {"\n"}
                  {"\t"} redistribution.
                </li>
                <li>We can take chilled, frozen or ambient products. </li>
                <li>
                  We cannot accept hot meals for health and safety reasons but
                  please contact us about how you can donate catered food.
                </li>
              </ul>
              {/* 1st ul end  */}
              {/* 2nd ul  */}
              <p className="text-2xl">Delivery/Collection:</p>
              <ul className="list-disc list-inside pl-5 lg:whitespace-pre ">
                <li>
                  We can accept delivery of food to our Acton warehouse at short
                  notice Monday through Friday between 7am and {"\n"}
                  {"\t"} 7pm, and Saturday between 8am and 3pm.
                </li>
                <li>
                  We can collect within the M25, with a minimum 24 hours' notice
                  Monday through Friday between 7am and 4pm, and {"\n"}
                  {"\t"} Saturday between 7am and 2pm (depending on location).
                  Minimum collection amount is 50kg.
                </li>
                <li>
                  We can also collect outside the M25 for a minimum amount of 1
                  pallet (min 250kg).
                </li>
              </ul>
              {/* 2nd ul end  */}
            </div>
          </div>
          {/* form section  */}
          <div className="w-full min-h-screen bg-gray-50   py-[2rem] text-gray-800 rounded-b-lg">
            <form className="w-[85%] mx-auto  space-y-10  ">
              <div className="flex gap-1">
                <span className="text-red-500 ">*</span>
                <span>Required</span>
              </div>
              <div>
                <h1 htmlFor="organizationName" className="text-lg">
                  1. Enter Organization Name
                </h1>

                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  placeholder="Enter your answer"
                  className="w-full bg-white  py-2 px-5 ml-[1rem] mt-[2rem] rounded rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </div>
              {/* Organization  */}
              <div>
                <h1 className="text-lg" htmlFor="check">
                  2. Organisation Type
                </h1>
                <div className="pl-[1rem] space-y-6 mt-6 text-sm">
                  <div className="flex gap-2">
                    <input type="radio" name="check" id="check" />
                    <h1>Events/Catering</h1>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="check" id="check" />
                    <h1>Farm</h1>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="check" id="check" />
                    <h1>Manufacturer/Producer</h1>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="check" id="check" />
                    <h1>Wholesaler</h1>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="check" id="check" />
                    <h1>Distributor</h1>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="check" id="check" />
                    <h1>Restaurant</h1>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="check" id="check" />
                    <h1>Film</h1>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="check" id="check" />
                    <h1>Other</h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 htmlFor="name" className="text-lg">
                  3. Enter Name
                </h1>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your answer"
                  className="w-full bg-white  py-2 px-5 ml-[1rem] mt-[2rem] rounded rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  "
                />
              </div>{" "}
              <div>
                <h1 htmlFor="organizationName" className="text-lg">
                  4. Please provide your phone number
                </h1>

                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  placeholder="Enter your answer"
                  className="w-full bg-white  py-2 px-5 ml-[1rem] mt-[2rem] rounded rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </div>{" "}
              <div>
                <h1 htmlFor="organizationName" className="text-lg">
                  5. Please provide your email
                </h1>

                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  placeholder="Enter your answer"
                  className="w-full bg-white  py-2 px-5 ml-[1rem] mt-[2rem] rounded rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </div>{" "}
              <div>
                <h1 htmlFor="collect/deliver" className="text-lg">
                  6. Do you need us to collect or can you deliver to us?
                </h1>
                <div className="pl-[1rem] flex flex-col gap-6 mt-6 text-sm">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="collect/deliver"
                      id="collect/deliver"
                    />
                    <h1>Collection</h1>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="collect/deliver"
                      id="collect/deliver"
                    />
                    <h1>
                      Delivery: Unit 8, Acton Park Industrial Estate, Kahi, W3
                      7YG
                    </h1>
                  </div>
                </div>
              </div>
              <h1 className="text-lg">
                You can print a copy of your answer after you submit
              </h1>
              <button
                type="submit"
                className="bg-[#5bb132] w-full  md:w-[12%] rounded px-4 py-3 text-white"
              >
                Submit
              </button>
              <div className="text-xs">
                <span>Never give out your password. </span>
                <Link to="https://www.youtube.com/">
                  <span className="text-blue-800 underline">Report abuse</span>
                </Link>
              </div>
              <p className="text-xs">
                This content is created by the owner of the form. The data you
                submit will be sent to the form owner. Microsoft is not
                responsible for the privacy or security practices of its
                customers, including those of this form owner. Never give out
                your password.
              </p>
              <div className="text-xs">
                <span>
                  Powered by Microsoft Forms | The owner of this form has not
                  provided a privacy statement as to how they will use your
                  response data. Do not provide personal or sensitive
                  information. |
                </span>
                <Link to="https://www.youtube.com">
                  <span className="text-blue-800 underline">Terms of use</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonateFood;
