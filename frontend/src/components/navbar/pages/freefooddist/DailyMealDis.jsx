import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg1 from "../../../../assets/bg1.jpg";
import RRPD from "../../../../assets/freeFoodDis/RRPD.png";
import { Link } from "react-router-dom";
import VideoCard from "../../../card/VideoCard";
import FreeFoodCard from "./FreeFoodCard";
import SmallCard from "./SmallCard";

const DailyMealDis = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main>
      {/* Daily Meal distribution section Open */}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="sm:pl-8 ">1. DAILY MEAL DISTRIBUTION</h1>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 lg:pr-24 md:pr-14 sm:pr-24 text-justify ">
              Spogmai Foundation is committed to solving food insecurity through a daily meal
              delivery program. Recognizing the importance of nutrition, the foundation works
              to guarantee that people in economically disadvantaged areas receive a consistent
              and nutritious meal every day. This initiative provides a lifeline for those facing
              financial difficulties, ensuring they have regular access to food and support. The
              foundation contributes to the well-being and dignity of individuals by eliminating
              hunger and encouraging a healthier and more stable life for all through its daily
              meal distribution. Spogmai Charity Foundation's daily meal distribution program goes
              above and beyond addressing the community's basic nutritional needs. It develops a sense
              of community and solidarity by providing a venue for where individuals can congregate,
              share experiences, and enjoy a moment of rest from their everyday hardships. Not only
              does this program nourish the body, but it additionally encourages a sense of belonging
              and solidarity among participants. The foundation makes a positive influence well beyond
              the plate by extending a helping hand and exhibiting compassion via consistent meal distribution,
              reaffirming the belief that every individual deserves access to dignified nutrition and care.
              <br />
              <p className=" mt-5">
                <strong>The clips below show our Daily Food Distribution.</strong>
              </p>
            </p>

          </div>

          <div className="lg:w-[40%] pb-5">
            <SmallCard
              image={bg1}
              title="Picture Gallery"
              description="Daily lunch distribution in Hangu"
            />
            <SmallCard
              image={bg1}
              title="Picture Gallery"
              description=" Daily Dinner distribution in shelter Home"
            />
          </div>
        </div>

        <Carousel responsive={responsive} className=" lg:mx-20 text-white">
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
        </Carousel>
      </section>
      {/* Daily meal distribution section Closed */}

      {/*Monthly Ration Packages section Open */}
      <section className=" bg-white text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="sm:pl-8 ">2. MONTHLY RATION PACKAGES</h1>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify">
              Certainly, distributing monthly ration packages to impoverished families in our area
              is a critical initiative undertaken by Spogmai  Foundation. This program is designed
              to address the ongoing challenges faced by vulnerable households in accessing essential
              food supplies. By providing a comprehensive package of staple foods and necessities on
              a monthly basis, the foundation aims to alleviate the burden of food insecurity and enhance
              the quality of life for these families.
              <br />
              The monthly ration package includes a carefully curated selection of items such as rice, flour,
              lentils, cooking oil, sugar, and basic hygiene products. This approach ensures that families receive
              a balanced and sufficient diet, along with items to maintain their personal hygiene. By extending
              this assistance regularly, the foundation not only meets immediate needs but also helps families plan
              their resources more effectively, contributing to long-term stability.
              <br />
              Moreover, beyond the tangible impact of providing sustenance, the monthly ration distribution fosters a
              sense of support and unity within the community. It brings families together, emphasizing that they are
              not alone in their struggles. This collective effort builds a network of solidarity that strengthens
              community ties and uplifts individuals emotionally as well as physically.
              <br />
              <p className=" mt-5">
                <strong>The clips below show our Monthly Rations Distribution.</strong>
              </p>
            </p>
          </div>

          <div className="lg:w-[40%] pt-20">
            <SmallCard
              image={bg1}
              title="Picture Gallery"
              description="Daily lunch distribution in Hangu"
            />
          </div>
        </div>

        <Carousel responsive={responsive} className=" lg:mx-20 text-white">
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
          <FreeFoodCard
            text="  Lorem ipsum dolor sit amet consectetur adipisicing aspernatur vitae officia deserunt facilis suscipit"
            image="https://media.licdn.com/dms/image/C4E12AQHY1jqipj8HFA/article-cover_image-shrink_720_1280/0/1644916369002?e=2147483647&v=beta&t=Bpzh_gYu30BcBwkNmh8Ul1Bll91qJ3rKg9aiC1dNEo4"
          />
        </Carousel>
      </section>
      {/*Monthly Ration Packages section closed */}

      {/*Ramazan Ration Packages section open*/}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20  uppercase">
          <h1 className="sm:pl-8 ">3. Ramazan RATION PACKAGES</h1>
        </div>

        <div className="lg:flex lg:pl-24  mb-24 px-4 md:px-20">
          <div className="lg:w-[60%] pt-10">
            <p className="sm:pl-8  pb-4 xl:pr-5 lg:pr-24 md:pr-14 sm:pr-24 text-justify">
              Every year during Ramadan, Spogmai Foundation does something special. They put together
              special packages of food for families who don't have enough to eat. These packages have things
              like rice, flour, lentils, and other important foods. They also include things to help keep clean,
              like soap and toothpaste.
              <br />
              <br />
              Ramadan is a special time for many people, and these packages are a way to help families have a good
              and healthy Ramadan. Giving out these packages also shows that people care about each other. It's a
              way of sharing and being kind to others.
              <br />
              <br />
              By doing this every year, the Spogmai Foundation makes sure that families have enough food
              and things they need, especially during this important time. It's a way to help and make a difference
              in the lives of those who need it.
              <br />
              <p className=" mt-5">
                <strong>The clips below show our Ramazan Ration Distribution.</strong>
              </p>
            </p>
          </div>

          <div className="lg:w-[40%] pt-20">
            <SmallCard
              image={RRPD}
              title="Picture Gallery"
              description="Ramzan Ration Packeges Distribution"
            />
          </div>
        </div>

        <Carousel responsive={responsive} className=" lg:mx-20 text-white">
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Video1"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Video2"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Video3"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Video4"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Video5"
          />
        </Carousel>
      </section>
      {/*Ramazan Ration Packages section closed*/}


      {/* Help us Section open */}
      <Link to="/donateNow">
        <div className="md:flex md:justify-around md:items-center py-10 my-5 px-14 h-56 bg-blue-400 ">
          <h1 className="text-white font-bold sm:text-3xl text-2xl">
            Help Us So We Can Kill The Hunger
          </h1>
          <button className=" border-2 border-white rounded-2xl p-3 ml-24 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500">
            Donate Now{" "}
          </button>
        </div>
      </Link>
      {/* Help us Section closed */}
    </main>
  );
};

export default DailyMealDis;
