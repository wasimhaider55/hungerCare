import React, { useState } from "react";

import ffd4 from "../../../assets/freeFoodDis/ffd4.png";
import ffd3 from "../../../assets/freeFoodDis/ffd2.png";
import spbg2 from "../../../assets/freeFoodDis/spbg2.png";
import bg1 from "../../../assets//bg1.jpg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function App() {
  const slides = [
    {
      id: 1,
      img: ffd4,
    },
    {
      id: 2,
      img: ffd3,
    },
    {
      id: 3,
      img: spbg2,
    },
    {
      id: 4,
      img: bg1,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  //   Slide Section

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
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
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
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
          {slides.map((slide, slideIndex) => (
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
