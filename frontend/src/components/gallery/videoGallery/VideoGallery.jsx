import React from "react";

const VideoGallery = () => {
  return (
    <main className="pt-20">
      {/* Gallery section open */}
      <div className='w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1> Videos Gallery </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Gallery section Closed */}
      {/* Introduction section open */}
      <section className="    pt-20 px-5  md:px-20 ">
        <div>
          <h1 className="text-4xl font-bold"> INTRODUCTION </h1>
          <div className=" w-24 h-1 bg-blue-500 rounded-full mt-3 "></div>

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
    </main>
  );
};

export default VideoGallery;
