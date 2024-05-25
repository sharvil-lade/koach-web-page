import React from "react";
import slug from "../assets/sluggish.png";
import after from "../assets/Frame 309.png";
// import arr from '../assets/img/arrow.png'
const Banner = () => {
  return (
    <>
      <div className="bg-[#2D488F] border-x-[3px] border-y-[1.5px] border-[black] flex justify-center font-body text-center text-[44px] text-white w-full py-[2.5rem] px-[3rem]">
        <p>
          Secure world-class coaching, build your network of skilled
          <br />
          mentors and accelerate your professional growth trajectory
        </p>
      </div>
      <div className="bg-[#F5E649] border-x-[3px] border-y-[1.5px] border-[black] flex flex-wrap gap-x-[8rem] py-[4rem]  justify-center">
        <div className="flex flex-col flex-wrap items-center ">
          <h2 className="font-body font-[900] text-6xl">300+</h2>
          <p className="font-body font-normal py-[0.5rem] text-[20px]">
            Coaches and Mentors in our Koach Network
          </p>
        </div>
        <div className="flex flex-col flex-wrap items-center">
          <h2 className="font-body font-[900] text-6xl">7X</h2>
          <p className="font-body font-normal py-[0.5rem] text-[20px]">
            Fast Time to Value than Navigation Alone
          </p>
        </div>
        <div className="flex flex-col flex-wrap items-center">
          <h2 className="font-body font-[900] text-6xl">175+</h2>
          <p className="font-body font-normal py-[0.5rem] text-[20px]">
            Sessions booked
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="border-x-[3px] border-y-[1.5px] border-[black] w-[50%]">
          <div className="flex flex-col items-center">
            <p className="bg-[#F5E649] border rounded-3xl font-body font-medium my-[20px] py-[5px] px-[2rem] text-2xl">
              Before
            </p>
            <h2 className="font-body font-[800] text-4xl mb-[3rem] text-center">
              Traditional Coaching: <br /> Sluggish
            </h2>
            <img src={slug} alt="slug" className="w-full px-[2rem]" />
            <p className="font-body mx-[10rem] text-xl text-center">
              Finding, both the right coach and the right fit clients for your
              coaching business can take up to 6 months.
            </p>
          </div>
          {/* <img src={arr} alt='arrow'/> */}
        </div>

        <div className="border-x-[3px] border-y-[1.5px] border-[black] w-[50%]">
          <div className="flex flex-col items-center">
            <p className="font-body font-medium bg-[#F5E649] border rounded-3xl my-[20px] py-[5px] px-[2rem] text-2xl">
              After
            </p>
            <h2 className="font-body font-[800] text-4xl mb-[3rem] text-center">
              Achieve results in
              <br /> weeks; not in month
            </h2>
            <img src={after} alt="after" className="w-full px-[8rem]" />
            <p className="font-body my-[3rem] mx-[10rem] text-xl text-center">
              With Koach, we accelerate coach and client sourcing, swiftly
              pairing new and young pros with culturally aligned, world-class
              coaches.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#2D488F] border-x-[3px] border-y-[1.5px] border-[black] flex flex-col flex-wrap justify-center text-center text-white w-full py-[2.5rem] px-[3rem]">
        <h3 className="font-body font-[800] text-[2.75rem]">
          Koach is for Entrepreneurs
        </h3>
        <p className="font-body font-normal text-[1.5rem] mb-[2rem]">
          (Em)Powered by Experience. Leading the Future. Today.
        </p>
        <p className="font-body font-normal text-[1.5rem] mt-[2rem] px-[14rem] mb-[2rem]">
          Koach is your future-proof career catalyst. We connect you with
          World-Class coaches who've dominated their fields and domains and are
          ready to accelerate your professional-career goals.
        </p>
        <div className="flex justify-center items-center gap-[3rem] relative">
          <p className="font-body font-bold text-2xl">Search Mentor</p>
          <button className="bg-slate-900 text-white py-4 md:py-6 px-6 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-lg md:text-2xl border-2 border-black font-semibold uppercase hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[10px_10px_0px_#3498db] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Start Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
