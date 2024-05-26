import React, { useState, useEffect } from "react";
import koachh from "../assets/koach_logo.png";
import "../components/Hero.css";

function Hero() {
  const [platform, setPlatform] = useState("Quora");
  const platforms = ["Quora", "Google", "Reddit", "TikTok"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % platforms.length);
    }, 2000); // Change platform every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPlatform(platforms[index]);
  }, [index, platforms]);

  return (
    <div className="hero-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-gray-200 text-gray-900">
      <div className="navbar-container w-full border-b-4 border-black flex justify-center items-center">
        <div className="border-l-4 border-r-4 border-black px-4">
          <img src={koachh} alt="Koach Logo" className="h-20 md:h-20 p-4" />
        </div>
      </div>
      <div className="text-center p-6 md:p-12 mt-4 md:mt-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 mt-4 md:mb-4">
          Say goodbye to endless{" "}
          <span className="text-blue-600 platform-name">{platform}</span>{" "}
          searches.
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16">
          Find expert advice effortlessly with Koach.
        </h1>
        <div className="max-w-3xl md:max-w-5xl mx-auto">
          <p className="text-lg md:text-2xl mb-8 md:mb-12">
            72% of career advice online is outdated. It's time to ditch the
            unreliable advice rabbit hole. Koach connects you with proven
            coaches, not outdated blog posts and questionable forum threads.
            Stop spinning your wheels and start accelerating your career.
          </p>
        </div>
        <div className="pt-4 md:pt-12">
          <button className="bg-slate-900 text-white py-3 md:py-6 px-4 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-lg md:text-2xl border-2 border-black font-semibold uppercase hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[10px_10px_0px_#3498db] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Get Priority Access
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
