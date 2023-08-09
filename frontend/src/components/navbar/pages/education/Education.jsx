import React from "react";

const Education = () => {
  return (
    <main className="min-h-screen pt-24">
      {/*Education section open */}
      <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1 className="">Education </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Education section Closed */}
      {/* Overview section open */}
      <section className="    pt-20 px-5  md:px-20">
        <div className="text-gray-500 space-x-3 space-y-3">
          <h1 className="text-4xl font-bold text-black "> OVERVIEW </h1>
          <p>
            Spogmain foundation is running the following programs related to
            free education.
          </p>
          <ol className="list-decimal pl-5">
            <li>Orpahan education support</li>
            <li>Slum school</li>
          </ol>
        </div>
      </section>
      {/* Overview section closed */}
    </main>
  );
};

export default Education;
