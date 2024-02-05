import Image from "next/image";
import React from "react";
import apartmentIcon from "../assets/icons/apartment.png";
import officeIcon from "../assets/icons/office.png";
import houseIcon from "../assets/icons/house.png";
import warehouseIcon from "../assets/icons/warehouse.png";
import parkingIcon from "../assets/icons/parking.png";
import Link from "next/link";

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center mr-[60px] hover:scale-125 ease-in duration-200">
      <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px] shadow-xl p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
        <Image src={icon} alt={title} className="w-10 h-10" />
        <p className="font-bold text-xs leading-6 text-center text-blueCardTitle dark:text-gray-200">
          {title}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div id="services" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-blue-200 hover:bg-blue-600 px-2 rounded-2xl text-blue-500 hover:text-white h-12 w-30 font-black text-small uppercase cursor-pointer ">
          WHY CashBazaar?
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-8xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            WHY CashBazaar?
          </p>
          <p className="text-3xl text-blue-900 font-bold text-center z-20 relative mt-4 sm:mt-12 dark:text-gray-300">
            Investing in real estate has evolved. A smart way to invest is
            available to everyone.
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-20 text-bluePText">
          Invest in prime properties digitally from as low as 300,000 PKR,
          regardless of your location in Pakistan!
        </p>
      </div>

      {/* 5 icons and names of services */}
      <div className="grid grid-cols-2 sm:flex justify-center items-center mt-16 ml-[40px]">
        <ServiceItem
          icon={houseIcon}
          title="Verified Properties"
          description="Discover verified properties with confidence."
        />

        <ServiceItem
          icon={apartmentIcon}
          title="Integrity"
          description="Experience integrity in every transaction."
        />

        <ServiceItem
          icon={officeIcon}
          title="Market-based Pricing"
          description="Get market-based pricing for fair deals."
        />

        <ServiceItem
          icon={warehouseIcon}
          title="Tailored Programs"
          description="Explore tailored investment programs."
        />
      </div>
    </div>
  );
};

export default Services;
