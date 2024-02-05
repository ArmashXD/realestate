import Link from "next/link";
import React from "react";

export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}) {
  return (
    <div id="about-container" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200  hover:bg-green-600 px-4 py-1 rounded-2xl text-green-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Our Story
        </button>
      </div>

      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white
          "
          >
            OUR STORY
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300 w-[50%]">
            We strive to democratize property investment in Pakistan by making
            it achievable for everyone to own property in smaller fractions.
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-20  text-bluePText ">
          Our mission is to revolutionize Real Estate Investment in Pakistan by
          making it affordable to everyone with a smartphone and internet
          connection. We believe everyone deserves the opportunity to own
          property, so we have built a cutting-edge blockchain-based platform
          This platform connects buyers and sellers through our digital
          platform, which allows property owners to Fractionalize their
          property. With our platform, owning property has never been easier,
          more affordable, or more accessible. Join us in our quest to
          democratize Real Estate Investment and make property ownership a
          reality for all.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-[50px] ml-[28px]">
        <div className="bg-white  py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-small text-2xl text-center leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            Launch Date
          </p>
          <p className="font-small text-2xl text-center leading-[50px] text-blueCardTitle capitalize dark:text-gray-100 font-bold">
            2023
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-small text-2xl text-center leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            Team Members
          </p>
          <p className="font-small text-2xl text-center leading-[50px] text-blueCardTitle capitalize dark:text-gray-100 font-bold">
            5
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-small text-2xl text-center leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            Projects onboarded
          </p>
          <p className="font-small text-2xl text-center leading-[50px] text-blueCardTitle capitalize dark:text-gray-100 font-bold">
            3
          </p>
        </div>
      </div>
    </div>
  );
}
