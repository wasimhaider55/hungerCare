import React from "react";

import Card from "./Card";

const OurActivities = () => {
  return (
    <main className="pt-28 mb-20 px-2">
      <h1 className="lg:text-4xl text-4xl font-bold  text-center  py-10">
        Our Causes
      </h1>

      <section>
        <div className="grid md:grid-cols-3 gap-5 justify-center mx-10">
          <Card
            title="Free Food Distribution"
            image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
            link="/ourcauses/freefooddistribution"
          />
          <Card
            title="Poor Family Support"
            image="https://showhope.org/content/uploads/2020/09/9Q9A6112-1024x686.jpg"
            link="/ourcauses/poorfamilysupport"
          />
          <Card
            title=" Orphan Family Support"
            image="https://media.istockphoto.com/id/458112661/photo/african-children.jpg?s=612x612&w=0&k=20&c=uAThB_6QlEgJYP-_JvAFH1y2HX_Q9SY7X6U8hf7JYuw="
            link="/ourcauses/orphanfamilysupport"
          />
          <Card
            title="Disabled People Support"
            image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
            link="/ourcauses/disablepeoplesupport"
          />
          <Card
            title="Education Support"
            image="https://showhope.org/content/uploads/2020/09/9Q9A6112-1024x686.jpg"
            link="/ourcauses/educationsupport"
          />
          <Card
            title=" Orphan Family Support"
            image="https://media.istockphoto.com/id/458112661/photo/african-children.jpg?s=612x612&w=0&k=20&c=uAThB_6QlEgJYP-_JvAFH1y2HX_Q9SY7X6U8hf7JYuw="
            link="/ourcauses/orphanfamilysupport"
          />
        </div>
      </section>
    </main>
  );
};

export default OurActivities;
