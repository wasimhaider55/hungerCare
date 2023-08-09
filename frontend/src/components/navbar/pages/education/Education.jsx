import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import VideoCard from "../../../gallery/videoGallery/VideoCard";

import Card from "./Card";

const Education = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <main className="min-h-screen pt-24">
      {/*Education section open */}
      <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1 className="">Education Support </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Education section Closed */}
      {/* Overview section open */}
      <section className="    pt-20 px-5  md:px-20">
        <div className="text-gray-500 space-x-3 space-y-3">
          <h1 className="text-4xl font-bold text-black "> OVERVIEW </h1>
          <p>
            Spogmai foundation is running the following programs related to free
            education.
          </p>
          <ol className="list-decimal pl-5">
            <li>Orpahan education support</li>
          </ol>
        </div>
      </section>
      {/* Overview section closed */}

      {/*Education Support section open*/}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black my-20">
        {/* Slum school section start */}
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="sm:pl-8 ">ORPHAN EDUCATION SUPPORT</h1>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify">
              There are a number of poor orphan families included under SPOGMAI
              Foundation Monthly Widow/Orphan Family Support Program who
              regularly receive monthly allowance up to Rs. 20,000 in the form
              of cash from SPOGMAI Foundation for fulfilling their day to day
              living expenses. Those orphan families include such orphans whose
              educational expenses are also borne by SPOGMAI Foundation so that
              their education is not suffered due to financial crises or
              poverty.
            </p>
          </div>

          <div className="lg:w-[40%] pt-20">
            <Card />
          </div>
        </div>
        {/* Slum school section end */}

        <Carousel responsive={responsive} className=" lg:mx-20 text-white">
          <VideoCard
            link="https://www.youtube.com/embed/QmVEDlrwg8Y"
            title="video1"
          />
          <VideoCard
            link="https://www.youtube.com/embed/QmVEDlrwg8Y"
            title="video1"
          />
          <VideoCard
            link="https://www.youtube.com/embed/QmVEDlrwg8Y"
            title="video1"
          />
          <VideoCard
            link="https://www.youtube.com/embed/QmVEDlrwg8Y"
            title="video1"
          />
        </Carousel>
      </section>
      {/*Education Support section closed*/}
    </main>
  );
};

export default Education;
