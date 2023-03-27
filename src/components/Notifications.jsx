import React from "react";

export default function Notifications() {
  return (
    <div className="flex lg:mx-[150px] bg-[#ffffff] mb-[10px] z-[1000000] rounded-xl shadow-md ">
      
        <div className="flex flex-col lg:flex-row  justify-between px-[70px] py-[59px] w-full">
          <div className="flex flex-col">
            <h1 className="font-medium text-4xl w-[300px] text-[#0B132A]">
              Subscribe Now for Get Special Features!
            </h1>
            <div className="text-[#4F5665] font-normal text-base mt-5">
              Let's subscribe with us and find the fun.
            </div>
          </div>
          <div className="flex flex-col">
          <button className=" bg-[#F53838] text-white px-[70px] py-4 text-sm font-medium rounded-xl mt-10 shadow-2xl shadow-[#f53838]">
          Subscribe Now
        </button>
            </div>
        </div>
      
    </div>
  );
}
