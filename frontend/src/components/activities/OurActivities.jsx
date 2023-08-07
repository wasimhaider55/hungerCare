import React from "react";
import { Link } from "react-router-dom";

const OurActivities = () => {
  return (
    <main>
      <h1 className="lg:text-4xl text-4xl font-bold  text-center pt-28 pb-10">
        Our Causes
      </h1>

      <section>

        <div className="grid grid-cols-3 pb-5 px-10 gap-8 ">

          <Link to="/ourcauses/freefooddistribution">
            <div className="aspect-w-1 aspect-h-1 bg-blue-800  hover:scale-105 cursor-pointer  shadow-lg shadow-slate-900">
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
                alt="free food distribution"
                className="w-full h-full object-cover"
              />
              <h1 className=" text-center text-white text-2xl font-bold  ">Free Food Distribution</h1>
            </div>
          </Link>

          <Link to="/ourcauses/poorfamilysupport">
            <div className="aspect-w-1 aspect-h-1 bg-blue-800  hover:scale-105 cursor-pointer  shadow-lg shadow-slate-900">
              <img
                src="https://showhope.org/content/uploads/2020/09/9Q9A6112-1024x686.jpg"
                alt="poor family support"
                className="w-full h-full object-cover"
              />
              <h1 className=" text-center text-white text-2xl font-bold  ">Poor Family Support</h1>
            </div>
          </Link>

          <Link to="/ourcauses/orphanfamilysupport">
            <div className="aspect-w-1 aspect-h-1 bg-blue-800  hover:scale-105 cursor-pointer  shadow-lg shadow-slate-900">
              <img
                src="https://media.istockphoto.com/id/458112661/photo/african-children.jpg?s=612x612&w=0&k=20&c=uAThB_6QlEgJYP-_JvAFH1y2HX_Q9SY7X6U8hf7JYuw="
                alt="orphan family support"
                className="w-full h-full object-cover"
              />
              <h1 className=" text-center text-white text-2xl font-bold  ">Orphan Family Support</h1>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default OurActivities;
