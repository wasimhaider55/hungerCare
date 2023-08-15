import React from "react";
import Card from "./Card";
import ffd2 from "../../assets/freeFoodDis/ffd2.png"
import pfs from "../../assets/freeFoodDis/pfs.jpg"
import OFS from "../../assets/freeFoodDis/OFS.png"
import DPS1 from "../../assets/freeFoodDis/DPS1.png"
import ES1 from "../../assets/freeFoodDis/ES1.png"

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
            image={ffd2}
            link="/ourcauses/freefooddistribution"
          />
          <Card
            title="Poor Family Support"
            image={pfs}
            link="/ourcauses/poorfamilysupport"
          />
          <Card
            title=" Orphan Family Support"
            image={OFS}
            link="/ourcauses/orphanfamilysupport"
          />
          <Card
            title="Disabled People Support"
            image={DPS1}
            link="/ourcauses/disablepeoplesupport"
          />
          <Card
            title="Education Support"
            image={ES1}
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
