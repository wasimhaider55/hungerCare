import React from "react";
import { Link } from "react-router-dom";

const PoorFamilySupport = () => {
  return (
    <main className=" pt-20">
      {/*poor famillies support section open */}
      <div className=' relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=' absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 '>
          <h1 className=' capitalize'>Poor Familie's Support </h1>
          <div className=' w-24 h-1 bg-red-500 rounded-full mt-3 '></div>
        </div>
      </div>
      {/* poor famillies support section Closed */}


      {/* Overview section Open */}
      <div className=' lg:text-4xl text-3xl font-bold py-16 lg:pl-24 md:pl-20 pl-4'>
        <h1>Overview</h1>
        <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
        <p className=' pl-1 pr-4 py-8 lg:pr-24 md:pr-24 sm:pr-24 text-justify text-lg '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
          Lorem ipsum,
        </p>
      </div>
      {/* Overview section Closed */}


      {/*poor famillies support section components open */}
      <section className='bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black'>

        <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4 capitalize'>
          <h1>Poor Familie's Support</h1>
          <div className=' w-16 h-1 bg-blue-600 rounded-full mt-3 '></div>
        </div>

        <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20  gap-6'>

          <div className="lg:w-[50%]">
            <p className=' pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum,
            </p>
          </div>

          <div className='lg:w-[50%] pb-5'>
            <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
          </div>

        </div>
      </section>
      {/* poor famillies support section components Closed */}


      {/* Help us Section open */}
      <Link to="/donateNow">
        <div className='md:flex md:justify-around md:items-center py-10 my-5 px-14 h-56 bg-blue-400 '>
          <h1 className='text-white font-bold sm:text-3xl text-2xl'>Help Us So We Can help many more needy families</h1>
          <button className=' border-2 border-white rounded-2xl p-3 ml-24 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500'>Donate Now </button>
        </div>
      </Link>
      {/* Help us Section closed */}



    </main>
  );
};

export default PoorFamilySupport;
