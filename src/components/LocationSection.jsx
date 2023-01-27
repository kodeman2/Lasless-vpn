import React from "react";
import map from "../assets/worldmap.svg";
import apps from "../assets/appsimg.svg";

export default function LocationSection() {
  return (
    <div className="flex flex-col px-4 md:px-[160px] py-[20px] items-center">
      <h1 className=" font-medium text-4xl text-center text-[#0B132A]">
        Huge Global Network of Fast VPN
      </h1>
      <div className=" text-[#4F5665] font-normal text-base mt-5 text-center w-[300px] md:w-[550px]">
        See{" "}
        <span className="text-lg text-[#0B132A] font-medium">LaslesVPN</span>{" "}
        everywhere to make it easier for you when you move locations.
      </div>

      <div className="flex mt-[150px] w-full">
        <img src={map} alt="map" />
      </div>

      <div className="flex mt-10 w-full">
        <img src={apps} alt="apps" />
      </div>
    </div>
  );
}
