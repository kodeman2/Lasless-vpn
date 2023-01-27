import React from "react";
import planicon from "../assets/planbox.svg";
import ticked from "../assets/ticked.svg";

export default function PlanSection() {
  return (
    <div className="flex flex-col px-3 md:px-[100px] py-[10px]">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-medium text-center py-4">
          Choose your plan
        </h1>
        <p className="text-center font-normal text-base  text-[#4F5665] w-[300px] md:w-[550px]">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 my-[70px] justify-center">
        <div className="group">
          <div className="group-hover:border-[#F53838] border-2 border-[#DDDDDD] rounded-xl">
            <div className="flex flex-col justify-center items-center gap-7 p-[70px]">
              <img src={planicon} alt="planicon" />
              <p className="text-[#0B132A] font-medium">Free Plan</p>
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex flex-row gap-5 items-center">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Unlimited Bandwidth
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Encrypted Connection
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">No Traffic Logs</p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Works on All Devices
                  </p>
                </div>
              </div>

              <p className="text-[#0B132A] font-medium text-xl mt-10">Free</p>
              <button className="text-[#F53838] font-medium text-base rounded-full w-[170px] h-[45px] border-2 border-[#F53838] group-hover:bg-[#F53838] group-hover:text-white">
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="group-hover:border-[#F53838] border-2 border-[#DDDDDD] rounded-xl">
            <div className="flex flex-col justify-center items-center gap-7 p-[70px]">
              <img src={planicon} alt="planicon" />
              <p className="text-[#0B132A] font-medium">Standard Plan</p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-5 items-center">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Unlimited Bandwidth
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Encrypted Connection
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">Yes Traffic Logs</p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Works on All Devices
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Connects Anywhere
                  </p>
                </div>
              </div>
              <div className="flex flex-row">

              <span className="text-[#0B132A] font-medium text-xl mt-9">
                $9.99 <span className="text-[#4F5665] text-lg">/ mo</span>
              </span>
              </div>

             
              <button className="text-[#F53838] font-medium text-base rounded-full w-[170px] h-[45px] border-2 border-[#F53838] group-hover:bg-[#F53838] group-hover:text-white">
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="border-2 group-hover:border-[#F53838] border-[#DDDDDD] rounded-xl">
            <div className="flex flex-col justify-center items-center gap-7 p-[70px]">
              <img src={planicon} alt="planicon" />
              <p className="text-[#0B132A] font-medium">Premium Plan</p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-5 items-center">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Unlimited Bandwidth
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Encrypted Connection
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">Yes Traffic Logs</p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Works on All Devices
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Connect Anywhere
                  </p>
                </div>
                <div className="flex flex-row gap-5 items-center font-normal">
                  <img
                    src={ticked}
                    alt="ticked"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[#4F5665] text-base">
                    Get New Features
                  </p>
                </div>
              </div>

              <div className="flex flex-row">

<span className="text-[#0B132A] font-medium text-xl">
  $12 <span className="text-[#4F5665] text-lg">/ mo</span>
</span>
</div>
              <button className="text-[#F53838] font-medium text-base rounded-full w-[170px] h-[45px] border-2 border-[#F53838] group-hover:bg-[#F53838] group-hover:text-white">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
