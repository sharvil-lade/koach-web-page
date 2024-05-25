import React from "react";
import footer from "../assets/frame1.png";
import koach from "../assets/koach_logo.png";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="border-x-[3px] border-y-[1.5px] border-[black] bg-gradient-to-t from-[#2D488F] to-[#4C639F] flex flex-col flex-wrap justify-center text-center text-[white] w-full">
        <h2 className="font-body font-[800] px-[2rem] pt-[2rem] text-[3rem]">
          Join the 3.5K members winning with Koach
        </h2>
        <p className="font-body pt-[1rem] text-2xl pb-[1rem]">
          Join our community list to stay up to date & for exclusive launch
          benefits!
        </p>
        <div className="flex items-center w-full justify-center pb-[3rem]">
          <input
            type="text"
            placeholder="enter email address to get started"
            className="font-body font-bold border-[3px] border-[black] rounded-xl my-[1rem] px-[2rem] py-[1rem] text-2xl text-[black] w-[50%]"
          ></input>
          <button className="border-2 border-[black] font-body font-[600] bg-[white] py-[1rem] px-[1rem] rounded-xl text-[black] text-2xl">
            Let's Go!
          </button>
        </div>
      </div>
      <div className="bg-[#F5E649] border-x-[3px] border-y-[1.5px] border-[black] flex justify-center">
        <h1 className="font-body font-[800] text-5xl px-[2rem] py-[2rem]">
          Koach is your future-proof career catalyst
        </h1>
      </div>
      <div className="flex w-full border-x-[3px] border-y-[1.5px] border-[black]">
        <div className="bg-[#2D488F] border-r-[1.5px] border-[black] flex flex-col flex-wrap px-[3rem] pt-[4rem] items-end text-right text-[white] w-[50%]">
          <h3 className="font-body font-[800] text-4xl py-[2rem]">
            Drive your Career Forward,<br></br>with Koach
          </h3>
          <p className="text-xl pb-[2rem]">
            Connect with Boss-level World-Class
            <br /> Coaches in just a 2 minutes.
          </p>
          <button className="font-body font-medium border rounded-lg  py-[1rem] px-[1rem] text-lg w-[30%]">
            Subscribe
          </button>
        </div>
        <div className="p-[3rem] border-l-[1.5px] border-[black]">
          <img src={footer} alt="footer" className="h-full" />
        </div>
      </div>
      <div className="bg-[#F5E649] border-x-[3px] border-y-[1.5px] border-[black] flex justify-between px-[2rem] py-[1rem]">
        <img src={koach} alt="koach" className="h-[3rem] w-[3rem]" />
        <div className="flex gap-x-[1rem] text-5xl">
          <FaTiktok />
          <FaFacebook />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
};

export default Footer;
