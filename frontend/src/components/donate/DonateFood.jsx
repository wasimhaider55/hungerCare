import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const DonateFood = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    name: "",
    phoneNumber: "",
    foodKG: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    if (value === "show") {
      setFormData({
        ...formData,
        collectOrDeliver: value,
      });
    } else {
      setFormData({
        ...formData,
        collectOrDeliver: value,
        deliveryAddress: "", // Clear the delivery address when selecting "Delivery"
      });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/food", formData);
      if (response.status === 201) {
        toast.success("Data posted successfully"); // Display a success message
        setFormData({
          organizationName: "",
          organizationType: "",
          name: "",
          phoneNumber: "",
          foodKG: "",
          collectOrDeliver: "",
          deliveryAddress: "",
        }); // Clear the form data
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while posting data"); // Display an error message
    }
  };

  return (
    <main id="DonateFood" className="w-full pb-20  bg-gray-200">
      {/* Donate Food section open */}
      <div className='relative -full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute pt-10 sm:pt-20 md:pl-20 pl-10 ">
          <h1 className=" text-white text-3xl sm:text-4xl font-bold  ">
            Donate Food Now
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
          <div className="w-full min-h-screen bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black rounded-t-lg">
            <div className="mx-[2rem] py-[2rem]  flex flex-col gap-5">
              <h1 className="text-3xl">Food Donation Form</h1>
              <p>
                Thank you for your interest in donating food to Spogmai
                foundation! Please use this form to provide information on your
                food donation then our team will get back to you as soon as we
                can. If you have any questions, or would prefer to speak to us
                directly, please email wasimhaider_2022 or call us on
                0336-0574327.
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
            <form
              onSubmit={handleSubmit}
              className="w-[85%] mx-auto space-y-10"
            >
              {/* Organization Name */}
              <div>
                <h1 htmlFor="organizationName" className="text-lg">
                  1. Enter Organization Name
                </h1>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  placeholder="Enter your answer"
                  className="w-full bg-white py-2 px-5 ml-[1rem] mt-[2rem] rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </div>

              {/* Organization Type */}
              <div>
                <h1 className="text-lg" htmlFor="organizationtype">
                  2. Organisation Type
                </h1>
                <div className="pl-[1rem] space-y-6 mt-6 text-sm">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="organizationType"
                      value="Events/Catering"
                      checked={formData.organizationType === "Events/Catering"}
                      onChange={handleInputChange}
                    />
                    <h1>Events/Catering</h1>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="organizationType"
                      value="Home"
                      checked={formData.organizationType === "Home"}
                      onChange={handleInputChange}
                    />
                    <h1>Home</h1>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="organizationType"
                      value="Distributor"
                      checked={formData.organizationType === "Distributor"}
                      onChange={handleInputChange}
                    />
                    <h1>Distributor</h1>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="organizationType"
                      value="Restaurant"
                      checked={formData.organizationType === "Restaurant"}
                      onChange={handleInputChange}
                    />
                    <h1>Restaurant</h1>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="organizationType"
                      value="Other"
                      checked={formData.organizationType === "Other"}
                      onChange={handleInputChange}
                    />
                    <h1>Other</h1>
                  </div>
                  {/* Radio buttons for organization type */}
                  {/* You can add checked={formData.organizationType === "Events/Catering"} to each radio input */}
                </div>
              </div>

              {/* Name */}
              <div>
                <h1 htmlFor="name" className="text-lg">
                  3. Enter Name
                </h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your answer"
                  className="w-full bg-white py-2 px-5 ml-[1rem] mt-[2rem] rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </div>

              {/* Phone Number */}
              <div>
                <h1 htmlFor="phoneNumber" className="text-lg">
                  4. Please provide your phone number
                </h1>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your answer"
                  className="w-full bg-white py-2 px-5 ml-[1rem] mt-[2rem] rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </div>
              <div>
                <h1 htmlFor="phoneNumber" className="text-lg">
                  5. Food in KG
                </h1>
                <input
                  type="text"
                  id="foodKG"
                  name="foodKG"
                  value={formData.foodKG}
                  onChange={handleInputChange}
                  placeholder="e.g: 10KG"
                  className="w-full bg-white py-2 px-5 ml-[1rem] mt-[2rem] rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </div>

              {/* Collect/Deliver */}
              <div>
                <h1 htmlFor="collect/deliver" className="text-lg">
                  5. Do you need us to collect or can you deliver to us?
                </h1>
                <div className="pl-[1rem] flex flex-col gap-6 mt-6 text-sm">
                  <div>
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="collectOrDeliver"
                        value="show"
                        checked={formData.collectOrDeliver === "show"}
                        onChange={handleRadioChange}
                      />
                      <h1>Collection</h1>
                    </div>
                    {formData.collectOrDeliver === "show" && (
                      <input
                        type="text"
                        className="w-full bg-white py-2 px-5 ml-[1rem] mt-[2rem] rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Enter your address"
                        name="deliveryAddress"
                        value={formData.deliveryAddress}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="collectOrDeliver"
                      value="Delivery: Unit 8, Acton Park Industrial Estate, Kahi, W3 7YG"
                      checked={formData.collectOrDeliver !== "show"}
                      onChange={handleRadioChange}
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
                className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black w-full md:w-[12%] rounded px-4 py-3 hover:bg-gradient-to-b hover:from-[#89e9f9] hover:via-[#d8f6e7] hover:to-[#8ebf9b]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonateFood;
