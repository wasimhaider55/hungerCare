import React from "react";
import DailyMealDis from "./DailyMealDis";

const FreeFoodDis = () => {
  return (
    <main className=" pt-20">
      {/*Free Food Dis section open */}
      <div className=' relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className='absolute inset-0 bg-gray-900 opacity-60 '></div>
        <div className=' absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 '>
          <h1 className=' capitalize'>Free Food Distribution </h1>
          <div className=' w-24 h-1 bg-red-500 rounded-full mt-3 '></div>
        </div>
      </div>
      {/* Free Food Dis section Closed */}


      {/* Overview section Open */}
      <div className='lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4'>
        <h1>Overview</h1>
        <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
      </div>

      <div className='py-10 pr-4  lg:pr-16 pl-4 md:pl-20 lg:pl-24 text-justify text-gray-500'>
        <p>
          The Spogmai Foundation's Free Food Distribution program symbolizes the organization's commitment
          to reducing hunger and boosting social welfare in our neighborhood. Recognizing the critical need
          for food security, the foundation has launched an initiative to deliver nutritious meals to those
          in need.
        </p>
        <p className="mt-3">
          Many people in our neighborhood live in poverty and cannot even afford to buy food for themselves
          and their families. The major reason for starting the Spogmai Foundation was to give homeless
          individuals in our community access to free food. Thankfully, as time went on and with the help of
          contributors, the number of beneficiaries increased from hundreds to thousands.
        </p>
        <h3 className=" font-bold mt-5 text-gray-700"> There are the following at Spogmai Foundation Free Food Initiative</h3>
        <p className=" mt-4">1 Daily Meal Distribution</p>
        <p className=" mt-2">2 Monthly Ration Packages Distribution</p>
        <p className=" mt-2">3 Ramadan Ration Packages Distribution</p>
        <p className=" mt-2">4 Ramadan iftaar Dastarkhwan</p>
      </div>

      {/* Overview section Closed */}


      {/* daily meal distribution components render here */}
      <DailyMealDis />
    </main>
  );
};

export default FreeFoodDis;
