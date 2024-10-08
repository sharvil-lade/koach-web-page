import React from "react";
import footer from "../assets/frame1.png";
import koach from "../assets/koach_logo.png";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border-x-[3px] border-y-[1.5px] border-[black] bg-gradient-to-t from-[#2D488F] to-[#4C639F] flex flex-col justify-center text-center text-[white] w-full px-4">
        <h2 className="font-body font-[800] px-[2rem] pt-[2rem] text-[2rem] lg:text-[3rem]">
          Join the 1.7k members winning with Koach
        </h2>
        <p className="font-body pt-[1rem] text-xl lg:text-2xl pb-[1rem]">
          Join our community list to stay up to date & for exclusive launch
          benefits!
        </p>
        <div className="flex flex-col lg:flex-row items-center w-full justify-center pb-[3rem]">
          <input
            type="text"
            placeholder="enter email address to get started"
            className="font-body font-bold border-[3px] border-[black] rounded-xl my-[1rem] px-[2rem] py-[1rem] text-xl lg:text-2xl text-[black] w-[80%] lg:w-[50%]"
          />
          <button className="border-2 border-[black] font-body font-[600] bg-[white] py-[1rem] px-[1rem] rounded-xl text-[black] text-xl lg:text-2xl w-full lg:w-auto lg:ml-[1rem]">
            Let's Go!
          </button>
        </div>
      </div>
      <div className="bg-[#F5E649] border-x-[3px] border-y-[1.5px] border-[black] flex justify-center">
        <h1 className="font-body font-[800] text-3xl lg:text-5xl px-[2rem] py-[2rem] text-center">
          Koach is your future-proof career catalyst
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full border-x-[3px] border-y-[1.5px] border-[black]">
        <div className="bg-[#2D488F] border-r-[1.5px] border-[black] flex flex-col flex-wrap p-4 md:px-[3rem] pt-[4rem] items-center lg:items-end text-center lg:text-right text-[white] w-full lg:w-[50%]">
          <h3 className="font-body font-[800] text-2xl lg:text-4xl py-[2rem]">
            Drive your Career Forward,
            <br />
            with Koach
          </h3>
          <p className="text-lg lg:text-xl pb-[2rem]">
            Connect with Boss-level World-Class
            <br /> Coaches in just 2 minutes.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-[1.5rem] md:gap-[3rem] relative">
            <a href="https://form.feathery.io/to/JqZoDR#waitlist-application">
              <button className="font-body font-medium border rounded-lg py-[0.5rem] lg:py-[0.75rem] md:py-[0.75rem] px-[3rem] text-lg mb-4 lg:mb-0">
                Subscribe to <br />
                Koachable Weekly
              </button>
            </a>
          </div>
        </div>
        <div className="p-[3rem] border-l-[1.5px] border-[black] w-full lg:w-[50%] flex justify-center">
          <img src={footer} alt="footer" className="h-auto max-w-full" />
        </div>
      </div>
      <div className="bg-[#F5E649] border-x-[3px] border-y-[1.5px] border-[black] flex justify-between items-center px-[2rem] py-[1rem] flex-wrap">
        <img
          src={koach}
          alt="koach"
          className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
        />
        <div className="flex gap-x-[1rem] text-3xl lg:text-5xl">
          <a href="https://www.tiktok.com/@koach.live?_t=8n0JtHHqqmV&_r=1">
            <FaTiktok />
          </a>
          <a href="https://instagram.com/koachoff">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/koachoff">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;