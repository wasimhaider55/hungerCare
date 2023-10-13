import React from "react";
import Card from "./Card";
import pictureGallery from "../../assets/gallerylogo/pictureGallery.png";
import videoGallery from "../../assets/gallerylogo/videoGallery.png";

const Gallery = () => {
  return (
    <main className="w-full text-center mt-20">
      <h1 className="text-5xl font-bold text-gray-700">Gallery</h1>
      <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 mx-auto"></div>
      <div className="w-full grid lg:grid-cols-2 gap-2 md:gap-0   mt-20 mb-20    place-items-center   py-10 md:py-15 px-4 lg:px-20 ">
        <Card link="/gallery/picturegallery" image={pictureGallery} />
        <Card link="/gallery/videogallery" image={videoGallery} />
      </div>
    </main>
  );
};

export default Gallery;
