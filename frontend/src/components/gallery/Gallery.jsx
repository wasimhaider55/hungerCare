import React from "react";
import Card from "./Card";

const Gallery = () => {
  return (
    <main className="w-full grid lg:grid-cols-2 gap-2 md:gap-0  min-h-screen mt-20   place-items-center bg-gray-100  py-10 md:py-20 px-2 lg:px-20 ">
      <Card
        link="/gallery/picturegallery"
        title="Pictures Gallery"
        image="https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
      />
      <Card
        link="/gallery/videogallery"
        title="Videos Gallery"
        image="https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      />
    </main>
  );
};

export default Gallery;
