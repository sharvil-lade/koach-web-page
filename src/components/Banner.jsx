import React from "react";
import slug from "../assets/sluggish.png";
import after from "../assets/Frame 309.png";
// import arr from '../assets/img/arrow.png'
const Banner = () => {
  return (
    <>
      <div className="bg-[#2D488F] border-x-[3px] border-y-[1.5px] border-[black] flex justify-center font-body text-center text-[28px] md:text-[44px] text-white w-full py-[1.5rem] md:py-[2.5rem] px-[1.5rem] md:px-[3rem]">
        <p>
          Secure world-class coaching, build your network of skilled
          <br />
          mentors and accelerate your professional growth trajectory
        </p>
      </div>
      <div className="bg-[#F5E649] border-x-[3px] border-y-[1.5px] border-[black] flex flex-wrap gap-x-[2rem] md:gap-x-[12rem] py-[2rem] md:py-[4rem] justify-center">
        <div className="flex flex-col items-center text-center mb-6 md:mb-0">
          <h2 className="font-body font-[900] text-4xl md:text-6xl">300+</h2>
          <p className="font-body font-normal py-[0.5rem] text-[16px] md:text-[20px]">
            Coaches and Mentors in our
          </p>
          <p className="font-body font-normal text-[16px] md:text-[20px]">
            Koach Network
          </p>
        </div>
        <div className="flex flex-col items-center text-center mb-6 md:mb-0 pr-0 md:pr-20">
          <h2 className="font-body font-[900] text-4xl md:text-6xl">7X</h2>
          <p className="font-body font-normal py-[0.5rem] text-[16px] md:text-[20px]">
            Fast Time to Value than
          </p>
          <p className="font-body font-normal text-[16px] md:text-[20px]">
            Navigation Alone
          </p>
        </div>
        <div className="flex flex-col items-center text-center pr-0 md:pr-4">
          <h2 className="font-body font-[900] text-4xl md:text-6xl">175+</h2>
          <p className="font-body font-normal py-[0.5rem] text-[16px] md:text-[20px]">
            Sessions booked
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="border-x-[3px] border-y-[1.5px] border-[black] w-full md:w-[50%]">
          <div className="flex flex-col items-center p-4 md:p-0">
            <p className="bg-[#F5E649] border rounded-3xl font-body font-medium my-[20px] py-[5px] px-[2rem] text-[16px] md:text-2xl">
              Before
            </p>
            <h2 className="font-body font-[800] text-[28px] md:text-4xl mb-[1.5rem] md:mb-[3rem] text-center">
              Traditional Coaching: <br /> Sluggish and Outdated
            </h2>
            <img
              src={slug}
              alt="slug"
              className="w-[30rem] mb-[2rem] px-[2rem] md:px-[3rem]"
            />
            <p className="font-body mx-[1rem] md:mx-[12rem] text-lg md:text-xl text-center pt-[2.5rem] px-2">
              Finding, both the right coach and the right fit clients for your
              coaching business can take up to 6 months.
            </p>
          </div>
          {/* <img src={arr} alt='arrow'/> */}
        </div>

        <div className="border-x-[3px] border-y-[1.5px] border-[black] w-full md:w-[50%]">
          <div className="flex flex-col items-center p-4 md:p-0">
            <p className="font-body font-medium bg-[#F5E649] border rounded-3xl my-[20px] py-[5px] px-[2rem] text-[16px] md:text-2xl">
              After
            </p>
            <h2 className="font-body font-[800] text-[28px] md:text-4xl mb-[1.5rem] md:mb-[3rem] text-center">
              Achieve results in
              <br /> weeks; not in months
            </h2>
            <img
              src={after}
              alt="after"
              className="w-full mb-[2rem] px-[2rem] md:px-[2rem]"
            />
            <div className=" ">
              <p className="font-body my-[1.5rem] md:my-[3rem] mx-[1rem] md:mx-[10rem] text-lg md:text-xl text-center pt-6 px-2">
                With Koach, we accelerate coach and client sourcing, swiftly
                pairing new and young pros with culturally aligned, world-class
                coaches.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2D488F] border-x-[3px] border-y-[1.5px] border-[black] flex flex-col justify-center text-center text-white w-full py-[2.5rem] px-[1.5rem] md:px-[3rem]">
        <h3 className="font-body font-[800] text-[2rem] md:text-[2.75rem]">
          Koach is for Entrepreneurs
        </h3>
        <p className="font-body font-normal text-[1.25rem] md:text-[1.5rem] mb-[1.5rem] md:mb-[2rem]">
          (Em)Powered by Experience. Leading the Future. Today.
        </p>
        <p className="font-body font-normal text-[1.25rem] md:text-[1.5rem] mt-[1.5rem] md:mt-[2rem] px-[2rem] md:px-[10rem] lg:px-[14rem] mb-[1.5rem] md:mb-[2rem]">
          Koach is your future-proof career catalyst. We connect you with
          World-Class coaches who've dominated their fields and domains and are
          ready to accelerate your professional-career goals.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[1.5rem] md:gap-[3rem] relative">
          <button className="font-body font-medium border rounded-lg lg:py-[0.75rem] md:py-[0.75rem] px-[4rem] text-lg mb-4 lg:mb-0">
            Subscribe to <br /> the newsletter
          </button>
          <button className="bg-slate-900 text-white py-3 md:py-6 px-4 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-lg  md:text-2xl border-2 border-black font-semibold uppercase hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[10px_10px_0px_#3498db] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Get Priority Access
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
