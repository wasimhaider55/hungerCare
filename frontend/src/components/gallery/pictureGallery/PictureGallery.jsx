import React from "react";
import Card from "./Card";
import ffd4 from "../../../assets/freeFoodDis/ffd4.png";
import ffd3 from "../../../assets/freeFoodDis/ffd3.jpg";
import bg1 from "../../../assets/bg1.jpg";

const Gallery = () => {
  return (
    <main className="pt-20 " id="/gallery#picturegalllery">
      {/* Gallery section open */}
      <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1> Pictures Gallery </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Gallery section Closed */}
      {/* Introduction section open */}
      <section className="    pt-20 px-5  md:px-20 bg-white">
        <div>
          <h1 className="text-4xl font-bold "> INTRODUCTION </h1>

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
      <div className="w-full grid md:grid-cols-3 gap-8 my-[5rem]  py-10 md:py-20 px-1 md:px-20 ">
        <div>
          <Card
            title="Free Ration Distribution"
            image={ffd4}
            link="/gallery/freerationdistribution"
          />
        </div>
        <div>
          <Card
            title="Orphan Family Support"
            image={bg1}
            link="/gallery/orphanfamilysupport"
          />
        </div>
        <div>
          <Card
            title="Poor Family Support"
            image="https://images.squarespace-cdn.com/content/v1/577eab6d03596e5318b18a43/1616705131281-N5S4XIVBSLFSPZ4R819V/Orphange-Care.png?format=1500w"
            link="/gallery/poorfamilysupport"
          />
        </div>
        <div>
          <Card
            title="Disabled People Support"
            image="https://cdn.pixabay.com/photo/2015/04/06/23/40/wheelchair-710265_640.jpg"
            link="/gallery/disablepeopleusupport"
          />
        </div>
        <div>
          <Card
            title="Education Support"
            image={ffd3}
            link="/gallery/educationsupport"
          />
        </div>
        <div>
          <Card
            title="Comming Soon"
            image="https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675"
          />
        </div>
      </div>
      {/* Picture Card Section closed */}
    </main>
  );
};

export default Gallery;
