import { useState } from "react";
import { arrowRight } from "../assets/icons";

import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import AOS from 'aos'
import { useEffect } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);

  return (
    <section
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container" data-aos="fade-up"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

        {/* Our Summer Collection */}
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>

        {/* The New Arrival Nike Shoes */}
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">

          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>

          <br />

          <span className="text-coral-red inline-block mt-3">
            Nike
          </span> Shoes
          
        </h1>


        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        {/* Shop now Button */}
        <Button label="Shop now" iconURL={arrowRight} />

        {/* Statistics */}
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (

            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}
              </p>

              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>

          ))}
        </div>
      </div>
      

      {/* Shoe Cards */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"> 

        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (

            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
