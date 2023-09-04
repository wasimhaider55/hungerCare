import React from "react";
import Card from "./Card";
import pictureGallery from "../../assets/gallerylogo/pictureGallery.png";
import videoGallery from "../../assets/gallerylogo/videoGallery.png";

const Gallery = () => {
  return (
    <main className="w-full grid lg:grid-cols-2 gap-2 md:gap-0   mt-40 mb-20    place-items-center   py-10 md:py-15 px-4 lg:px-20 ">
      <Card link="/gallery/picturegallery" image={pictureGallery} />
      <Card link="/gallery/videogallery" image={videoGallery} />
    </main>
  );
};

export default Gallery;
