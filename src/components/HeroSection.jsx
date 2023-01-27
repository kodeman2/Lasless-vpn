import React from "react";
import heroimg from "../assets/heroimg.svg";
import usericon from "../assets/usericon.svg";
import locationicon from "../assets/locationicon.svg";
import servericon from "../assets/servericon.svg";

export default function HeroSection() {
  return (
   <div className="flex flex-col">

    <div className="flex flex-col md:flex-row md:px-[150px] px-5 justify-center">
      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="text-5xl  text-[#0B132A] font-medium py-5">
          Want anything to be easy with{" "}
          <span className="font-bold ">LaslesVPN.</span>
        </h1>
        <p className="text-base font-normal tracking-tight">
          Provide a network for all your needs with ease and fun using{" "}
          <span className="font-medium">LaslesVPN</span> discover interesting
          features from us.
        </p>

        <button className=" mr-auto bg-[#F53838] text-white px-[70px] py-4 text-sm font-medium rounded-xl mt-10 shadow-2xl shadow-[#f53838]">
          Get Started
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <img
          src = {heroimg}
          alt="heroimg"
          className="w-[600px] h-[400px]"
        />
        </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center py-10 mx-2 md:mx-[160px] bg-white mt-[70px] mb-10 rounded-xl  shadow-xl shadow-[#eaeaf0]">
     <div className="flex flex-row items-center gap-3 px-[70px] border-r-2 border-r-[#EEEFF2]">
      <img src={usericon}
       alt="usericon"
       className="w-[50px] h-[50px]"
      />
      <div className="flex flex-col justify-center">
       <h1 className="text-2xl text-[#0B132A] font-bold py-1">
        90+
       </h1>
       <p className="text-xl font-normal  text-[#4F5665] tracking-tight">
        Users
       </p>

       </div>
     </div>
     
     <div className="flex flex-row items-center gap-3 px-[70px] border-r-2 border-r-[#EEEFF2]">
      <img src={locationicon}
       alt="usericon"
       className="w-[50px] h-[50px] "
      />
      <div className="flex flex-col justify-center">
       <h1 className="text-2xl text-[#0B132A] font-bold py-1">
        30+
       </h1>
       <p className="text-xl font-normal  text-[#4F5665] tracking-tight">
        Locations
       </p>

       </div>
     </div>
     <div className="flex flex-row items-center gap-3  px-[70px] ">
      <img src={servericon}
       alt="usericon"
       className="w-[50px] h-[50px]"
      />
      <div className="flex flex-col justify-center ">
       <h1 className="text-2xl text-[#0B132A] font-bold py-1">
        50+
       </h1>
       <p className="text-xl font-normal text-[#4F5665] tracking-tight">
        Servers
       </p>

       </div>
     </div>
     </div>
   </div>
  );
}
