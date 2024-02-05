import Image from "next/image";
import React from "react";
import heroBg from "../assets/images/heroBackground.png";
import arrowIcon from "../assets/icons/arrow.png";
import phoneIcon from "../assets/icons/contact.png";
import mailIcon from "../assets/icons/mail.png";

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById("about-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen">
      <Image
        src={heroBg}
        alt="bg image"
        fill
        className="w-full h-full bg-no-repeat  object-cover object-center"
      />
      <div className="absolute inset-0 text-center flex flex-col justify-center items-center">
        <h1 className="font-normal text-4xl sm:text-5xl lg:text-7xl text-white mt-4 sm:mt-12 lg:mt-4 capitalize hidden sm:block">
          find real estate
          <br /> that suits you
        </h1>
        {/* Icons and Text under Heading */}
        <div className="flex flex-col sm:flex-row mt-8 sm:mt-12 lg:mt-24 justify-center items-center">
          <div className="flex flex-col sm:flex-row sm:mr-4 lg:mr-8 mb-4 sm:mb-0">
            <Image
              src={arrowIcon}
              alt="arrow icon"
              className="w-5 h-5 mx-2 self-center"
            />
            <p className="text-white text-xs sm:text-sm lg:text-xs py-2">
              Suite No. 27 and 28 Ground Floor, 172-N Kehkashan Shopping Mall,
              Tariq Road, Block 2, PECHS, Karachi
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:ml-4 lg:ml-8">
            <Image
              src={phoneIcon}
              alt="phone icon"
              className="w-5 h-5 mx-2 self-center"
            />
            <p className="text-white text-xs sm:text-sm lg:text-xs py-2">
              0320 5831020
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:ml-4 lg:ml-8">
            <Image
              src={mailIcon}
              alt="mail icon"
              className="w-5 h-5 mx-2 self-center"
            />
            <p className="text-white text-xs sm:text-sm lg:text-xs py-2">
              usamaabid496@yahoo.com
            </p>
          </div>
        </div>

        {/* Show more button  */}
        <div className="absolute bottom-8 w-full text-center">
          <button
            onClick={showMoreBtn}
            className="text-blue-900 text-lg sm:text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36"
          >
            show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
