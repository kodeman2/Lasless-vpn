import React from "react";
import logo from "../assets/vpnlogo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

const products = [
  "Download",
  "Pricing",
  "Locations",
  "Server",
  "Countries",
  "Blog",
];
const engage = [
  "LaslesVPN ?",
  "FAQ",
  "Tutorials",
  "About Us",
  "Privacy Policy",
  "Terms of Service",
];

const earn = ["Affiliate", "Become Partner"];

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row px-3 md:px-[150px] md:py-[200px] bg-[#F8F8F8]">
      <div className="flex mt-7 flex-col w-[50%]">
        <img src={logo} alt="logo" className="mr-auto h-8" />
        <div className="w-[340px]">
          <p className="text-[#4F5665] font-normal text-base mt-5">
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>
        </div>
        <div className="flex flex-row gap-5 mt-8">
          <div className=" bg-[#ffffff] shadow-lg rounded-full p-2">
            {" "}
            <FaFacebookF className="text-[#4F5665] text-2xl  fill-[#F53838] " />
          </div>
          <div className=" bg-[#ffffff] shadow-lg rounded-full p-2">
            <FaTwitter className="text-[#4F5665] text-2xl  fill-[#F53838] " />
          </div>
          <div className=" bg-[#ffffff] shadow-lg rounded-full p-2">
            {" "}
            <FaInstagram className="text-[#4F5665] text-2xl  fill-[#F53838]" />
          </div>
        </div>

        <p className="text-sm mt-8 text-[#AFB5C0] font-normal">
          ©2020LaslesVPN
        </p>
      </div>
      <div className="flex flex-col w-[50%]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <p className="text-[#0B132A] font-medium text-base mt-5">Product</p>
            {products.map((product) => (
              <a href="#" className="text-[#4F5665] font-normal text-base mt-5">
                {product}
              </a>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-[#0B132A] font-medium text-base mt-5">Engage</p>
            {engage.map((engages) => (
              <a href="#" className="text-[#4F5665] font-normal text-base mt-5">
                {engages}
              </a>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-[#0B132A] font-medium text-base mt-5">
              Earn Money
            </p>
            {earn.map((earns) => (
              <a href="#" className="text-[#4F5665] font-normal text-base mt-5">
                {earns}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
