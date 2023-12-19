import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoCard from "../../card/VideoCard";

const VideoGallery = () => {
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
    <main>
      {/* Gallery section open */}
      <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1> Videos Gallery </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Gallery section Closed */}

      {/* Introduction section open */}
      <section className="pt-20 px-5  md:px-20 ">
        <div>
          <h1 className="text-4xl font-bold"> INTRODUCTION </h1>
          <div className="w-24 h-1 bg-blue-500 rounded-full mt-3 "></div>

          <p className="py-10 text-gray-500">
            Welcome to our video gallery! Here you can find video of our various
            activities, Programs and Projects, Sector wise.
          </p>
          <p className=" text-gray-500">
            Please scroll from right to left on the videos to see more videos
            under any of our sectors below.
          </p>
        </div>
      </section>
      {/* Introduction section closed */}

      {/*Daily Meal Distribution section open*/}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black my-10">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="text-center ">DAILY MEAL DISTRIBUTION</h1>
        </div>

        <Carousel
          responsive={responsive}
          className="z-0 lg:mx-20 text-white py-10"
        >
          <VideoCard
            link="https://www.youtube.com/embed/5RX1enG0DrM"
            title="Video 1"
          />
          <VideoCard
            link="https://www.youtube.com/embed/5RX1enG0DrM"
            title="Video 2"
          />
          <VideoCard
            link="https://www.youtube.com/embed/5RX1enG0DrM"
            title="Video 3"
          />
          <VideoCard
            link="https://www.youtube.com/embed/5RX1enG0DrM"
            title="Video 4"
          />
        </Carousel>
      </section>
      {/*Daily Meal Distribution section closed*/}

      {/*Ration Packages section open*/}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black my-10">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="text-center ">RATION PACKAGES DISTRIBUTION</h1>
        </div>

        <Carousel
          responsive={responsive}
          className="z-0 lg:mx-20 text-white py-10"
        >
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Video 1"
          />
          <VideoCard
            link="https://www.youtube.com/embed/oYg7m3__FOc"
            title="Video 2"
          />
          <VideoCard
            link="https://www.youtube.com/embed/cbBR0t5cmB0"
            title="Video 3"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Video 4"
          />
        </Carousel>
      </section>
      {/*Ration Packages section closed*/}

      {/*Cash Distribution section open*/}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black my-10">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="text-center ">CASH DISTRIBUTION</h1>
        </div>

        <Carousel
          responsive={responsive}
          className="z-0 lg:mx-20 text-white py-10"
        >
          <VideoCard
            link="https://www.youtube.com/embed/AZfqTCb2yJY"
            title="Video 1"
          />
          <VideoCard
            link="https://www.youtube.com/embed/fAJrKq-_leU"
            title="Video 2"
          />
          <VideoCard
            link="https://www.youtube.com/embed/6qrxp6914XY"
            title="Video 3"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KZT7Hug9OQQ"
            title="Video 4"
          />
        </Carousel>
      </section>
      {/*Cash Distribution section closed*/}

      {/*Winter Packages Ditribution section open*/}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black my-10">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="text-center ">WINTER PACKAGES DISTRIBUTION</h1>
        </div>

        <Carousel
          responsive={responsive}
          className="z-0 lg:mx-20 text-white py-10"
        >
          <VideoCard
            link="https://www.youtube.com/embed/OTKUTfAhd-g"
            title="OTKUTfAhd"
          />
          <VideoCard
            link="https://www.youtube.com/embed/GPFqDAm7E0A"
            title="Video 2"
          />
          <VideoCard
            link="https://www.youtube.com/embed/YY2SZtaHxmo"
            title="  spogmai foundation program mrasta qest 3 Tahir fida k sath"
          />
          <VideoCard
            link="https://www.youtube.com/embed/t9nbaXlzkck"
            title="Video 4"
          />
        </Carousel>
      </section>
      {/*Winter Packages Ditribution section closed*/}
    </main>
  );
};

export default VideoGallery;
