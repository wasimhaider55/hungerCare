import React, { useState } from "react";
import { FRD } from "./ImageObject";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function App() {
  //   Slide Section

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? FRD.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === FRD.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Slider left Right Start
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 120;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 120;
  };
  // Slider left Right End

  return (
    <div className="max-full h-[550px] w-full m-auto py-16 md:px-4 relative group my-[8rem]    ">
      <div
        style={{ backgroundImage: `url(${FRD[currentIndex].img})` }}
        className="w-[70%] md:w-[40%] h-[80%] m-auto  rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[42%] md:top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full md:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[42%] md:top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full md:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* horizontal picture scroll  */}
      <div className="relative flex items-center  w-[80%] mx-auto top-10">
        <BsChevronCompactLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {FRD.map((slide, slideIndex) => (
            <span key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <img
                className="h-28 w-28 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={slide.img}
                alt="/"
              />
            </span>
          ))}
        </div>
        <BsChevronCompactRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>

      {/* Slider Section */}
    </div>
  );
}

export default App;
