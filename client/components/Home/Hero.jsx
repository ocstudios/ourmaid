import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-fit">

      <video
        src="/home.mov"
        className="inset-0 z-0 object-cover w-full mt-20 h-96 filter brightness-75"
        autoPlay
        controls
        muted
      >
        <source src="/home.mov" type="video/mov" />
      </video>
      <div className="z-20 flex items-center justify-center m-5">
        <div className="flex items-center justify-center flex-col z-20 py-5 md:py-10  px-4 md:px-8 bg-black text-white opacity-70 rounded-[30px] -bottom-60 md:-bottom-28  w-[95%] md:w-[75%] lg:w-[900px] xl:w-[1050px] mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-center tracking-[2px] mb-6 lg:mb-10">
            OUR MAIDS FRANCHISE, INC.
          </h1>
          <h3 className="text-xl md:text-2xl tracking-[2px] mb-3 lg:mb-5 font-bold text-center">
            THE BEST RESIDENTIAL AND COMMERCIAL CLEANING FRANCHISE IN THE WORLD.
          </h3>
          <h3 className="mb-2 text-lg font-bold text-center md:text-2xl lg:mb-3">
            AND THE MOST AFFORDABLE. OWN A FRANCHISE FROM THE LOWS $30K. <br />
            PAY THE $20K FRANCHISE FEE IN ONE YEAR WITH $3K DOWN AND 12 MONTHLY PAYMENTS OF $1,420 EACH.  <br />
            <span className="text-pink-300">
              Please be adviced: 
              <br/> 1.- Read our Operations Manual and the FDD and
              consult with your Attorney or Accountant.
              <br/> 2.- THIS OFFER DOES NOT APPLY TO ANY AREA DEVELOPMENT PROGRAM
            </span>{" "}
          </h3>
          <p className="text-sm md:text-[18px] leading-[25px] text-center">
            This website and the information contained herein do not constitute
            the offer or sale of a franchise. Certain states require the
            registration of an FDD before the franchisor can advertise or offer
            the franchise in that state. This franchise may not be registered in
            all states and may not offer franchises to residents of registration
            states or persons wishing to open a franchise in those states until
            compliance guidelines are met. The offer and sale of a franchise can
            only be made through the delivery and receipt of a Franchise
            Disclosure Document (FDD).{" "}
          </p>
          <button className="py-2 md:py-4 px-6 md:px-8 bg-pink-600 text-md md:text-xl rounded-[30px] cursor-pointer mt-2 md:mt-6 hover:bg-pink-800 font-semibold">
            OurMaids.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
