import React from "react";

const VideoCard = ({ link, title }) => {
  return (
    <div className="lg:mx-3 md:mx-12 sm:mx-10 mx-5 rounded-lg shadow-lg shadow-slate-900">
      <div className=" bg-gray-100 text-black rounded-lg  cursor-pointer">
        <iframe
          className="w-full aspect-video rounded-t-lg"
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p className=" px-4 text-md my-8 pb-4 sm:h-24 h-32 ">{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
