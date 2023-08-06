import React from "react";
import Card from "../Card";

const Gallery = () => {
  return (
    <main className="pt-20">
      {/* Gallery section open */}
      <div className='w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1> Pictures Gallery </h1>
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
            Welcome to our Picture gallery! Here you can find picture of our
            various activities, Programs and Projects, Sector wise.
          </p>
          <p className=" text-gray-500">
            Please click on the desire pictures album to see inside the choosen
            album.
          </p>
        </div>
      </section>
      {/* Introduction section closed */}
      {/* Picture Card Section Open */}
      <div className="w-full grid md:grid-cols-3 gap-8 my-[5rem] bg-gradient-to-t from-blue-900 bg-black py-10 md:py-20 px-1 md:px-20 ">
        <div>
          <Card
            title="ImageAlbum"
            image="https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675"
            link="/gallery/imagealbum"
          />
        </div>
        <div>
          <Card
            title="Daily lunch distribution in Hunger"
            image="https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675"
          />
        </div>
        <div>
          <Card
            title="thirdImage"
            image="https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675"
          />
        </div>
        <div>
          <Card
            title="fourthImage"
            image="https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675"
          />
        </div>
        <div>
          <Card
            title="fifthImage"
            image="https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675"
          />
        </div>
        <div>
          <Card
            title="sixthImage"
            image="https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675"
          />
        </div>
      </div>
      {/* Picture Card Section closed */}
    </main>
  );
};

export default Gallery;
