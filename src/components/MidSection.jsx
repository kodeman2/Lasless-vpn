import React from "react";
import midimage from "../assets/midimage.svg";
import checked from "../assets/checkedicon.svg";

export default function MidSection() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-[150px] py-[50px] gap-5 ">
      <div className="flex justify-center lg:w-1/2">
        <img src={midimage} alt="midimage" className="w-[500px] h-[390px]" />
      </div>
      <div className="flex flex-col pt-10 px-8 lg:w-1/2">
        <h1 className="text-[#0B132A] font-medium text-4xl">
          We Provide Many Features You Can Use
        </h1>
        <p className="text-[#4F5665] text-lg mt-5">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex flex-row gap-3 items-center">
            <img src={checked} alt="checked" className="w-[20px] h-[20px]" />
            <p className="text-[#4F5665] text-base">
              Powerfull online protection.
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={checked} alt="checked" className="w-[20px] h-[20px]" />
            <p className="text-[#4F5665] text-base">
              Internet without borders.
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={checked} alt="checked" className="w-[20px] h-[20px]" />
            <p className="text-[#4F5665] text-base">Supercharged VPN.</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={checked} alt="checked" className="w-[20px] h-[20px]" />
            <p className="text-[#4F5665] text-base">No specific time limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
