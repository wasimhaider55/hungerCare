import React from "react";
import Card from "./Card";

const Gallery = () => {
  return (
    <main className="w-full grid lg:grid-cols-2 gap-2 md:gap-0  min-h-screen mt-20   place-items-center   py-10 md:py-20 px-2 lg:px-20 ">
      <Card
        link="/gallery/picturegallery"
        title="Pictures Gallery"
        image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
      />
      <Card
        link="/gallery/videogallery"
        title="Videos Gallery"
        image="https://showhope.org/content/uploads/2020/09/9Q9A6112-1024x686.jpg"
      />
    </main>
  );
};

export default Gallery;
