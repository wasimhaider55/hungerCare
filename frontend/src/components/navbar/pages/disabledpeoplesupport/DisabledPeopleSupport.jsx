import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg1 from "../../../../assets/bg1.jpg";
import { Link } from "react-router-dom";
import VideoCard from "../../../card/VideoCard";

const DisabledPeopleSupport = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <main className=" pt-20">
      {/*Disabled people support section open */}
      <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=' absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 '>
          <h1 className=''>Disabled People Support </h1>
          <div className=' w-24 h-1 bg-red-500 rounded-full mt-3 '></div>
        </div>
      </div>
      {/* Disabled people support section Closed */}


      {/* Overview section Open */}
      <div className='lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4'>
        <h1>Overview</h1>
        <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
      </div>

      <div className='py-10 pr-4  lg:pr-16 pl-4 md:pl-20 lg:pl-24 text-justify text-gray-500'>
        <p className=" mt-2 mb-6">
          At the Spogmai Foundation, we are dedicated to championing the rights and potential of disabled individuals through our comprehensive Disabled People Support program.
        </p>
        <strong>Our Approach:</strong>
        <p className="mt-4">
          We work tirelessly to create an inclusive society that celebrates diversity and supports the needs of disabled individuals. We strive to ensure that all aspects of life are accessible, from infrastructure to information, promoting independence and participation.
        </p>
        <p className=" mt-2">
          Our program provides a range of services, from medical assistance and therapy to emotional support, empowering disabled individuals to live fulfilling lives and
          We promote education and skill development, fostering self-confidence and equipping disabled individuals with tools for self-sufficiency.
        </p>
        <p className=" mt-2 mb-8">
          Your support amplifies the voices of disabled individuals and contributes to a more inclusive and empathetic society.
        </p>
        <strong>Together, let's build a world where every individual's abilities shine.</strong>
      </div>

      {/* Overview section Closed */}


      {/* Disabled People Support section Open */}
      <section className='bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black'>

        <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 capitalize'>
          <h1 className='sm:pl-8 '>Disabled People Support</h1>
        </div>

        <div className='lg:flex lg:pl-24  mb-24 px-4 md:px-20'>

          <div className="lg:w-[60%] pt-10">
            <p className='sm:pl-8  pb-4 lg:pr-24 md:pr-14 sm:pr-24 text-justify '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
              Lorem ipsum,
            </p>
          </div>

          <div className='lg:w-[40%] pb-5 text-white'>
            <div className=' lg:mx-16 md:mx-10 sm:mx-10 rounded-md shadow-lg shadow-slate-900'>
              <div className=' bg-gradient-to-l from-black to-blue-700  rounded-md cursor-pointer'>
                <img src={bg1} alt="deily lunch distribution" className='p-1' />
                <h1 className=' px-4 text-md pt-4 text-center'>Picture Gallery</h1>
                <p className=' px-4 text-sm my-3 font-light pb-4 text-center '> Daily lunch distribution in Hangu
                </p>
              </div>

              <div className=' bg-gradient-to-l from-black to-blue-700  rounded-md cursor-pointer'>
                <img className=' lg:mt-10 p-1' src={bg1} alt="deily lunch distribution" />
                <h1 className=' px-4 text-md pt-4 text-center'>Picture Gallery</h1>
                <p className=' px-4 text-sm  my-3 font-light  pb-4 text-center '> Daily Dinner distribution in shelter Home
                </p>
              </div>
            </div>

          </div>
        </div>

        <Carousel responsive={responsive} className=" lg:mx-20 text-white">
          <VideoCard
            link="https://www.youtube.com/embed/QeWNYe-ZULk?si=x2YQxE9CP146mebv"
            title="spogmai foundation program dalasa qest 41 tahir fida k sath dowaba k zehni mareez ki halat behtar"
          />
          <VideoCard
            link="https://www.youtube.com/embed/Rjnxorasego?si=TU5EMjkOpPL5wiKt"
            title="spogmai foundation program dalasa qest 40 Tahir fida k sath hangu Kahi k cancer k bimar bachi"
          />
          <VideoCard
            link="https://www.youtube.com/embed/DqhPvdN_1yk?si=AU-xukjK45fwMQIu"
            title="Ration Packages Distributionm the founder of Spogmai foundation"
          />
          <VideoCard
            link="https://www.youtube.com/embed/iHsitsXSNQE?si=3XlhPWorcH9tGaB6"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/AZfqTCb2yJY?si=UZ6u1WRE15Ouc6yz"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/cXI7esD_xLc?si=BTHKKA0v_csI6p9L"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KZT7Hug9OQQ?si=xptEEz2vWFRqq9CE"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/MksfSTiaHc4?si=yFzaed3kACYcYqo7"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/3huoYedMbZQ?si=6zyMPmT27mYpO2X"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/myEAN3EspGo?si=yIuXtZEc9PhtW6eB"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/F84mIKofYCU?si=lY1Z-2IgWjWHLUeC"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/hFvDsdv-0vI?si=gbCFvtvWhuqNzMDg"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
          <VideoCard
            link="https://www.youtube.com/embed/d-M2i5Dl9nM?si=FFVmWPKjTdP72SFh"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
        </Carousel>
      </section>
      {/* Disabled People Support section Closed */}


      {/* Help us Section open */}
      <Link to="/donateNow">
        <div className='md:flex md:justify-around md:items-center py-10 my-5 px-14 h-56 bg-blue-400 '>
          <h1 className='text-white font-bold sm:text-3xl text-2xl'>Help Us So We Can help many more disabled people</h1>
          <button className=' border-2 border-white rounded-2xl p-3 ml-24 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500'>Donate Now </button>
        </div>
      </Link>
      {/* Help us Section closed */}
    </main>

  );
};

export default DisabledPeopleSupport;
