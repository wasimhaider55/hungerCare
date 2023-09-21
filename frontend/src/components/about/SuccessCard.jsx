import React from 'react'

const SuccessCard = ({link}) => {
    return (
      <div className="lg:mx-3 md:mx-12 sm:mx-10 mx-5 rounded-lg shadow-md shadow-slate-900">
        <div className=" bg-gray-100 text-black rounded-lg  cursor-pointer">
          <iframe
            className="w-full h-80 aspect-video rounded-t-lg"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default SuccessCard;