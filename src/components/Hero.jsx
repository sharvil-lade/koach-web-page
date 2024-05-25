import React, { useState, useEffect } from "react";
import koachh from "../assets/koach_logo.png";

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
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-gray-200 text-gray-900">
      <div className="w-full border-b-2 border-black flex justify-center items-center py-2">
        <img src={koachh} alt="Koach Logo" className="h-16" />
      </div>
      <div className="text-center p-12 mt-8">
        <h1 className="text-6xl font-bold mb-4">
          Say goodbye to endless{" "}
          <span className="text-blue-600">{platform}</span> searches.
        </h1>
        <h1 className="text-6xl font-bold mb-16">
          Find expert advice effortlessly with Koach.
        </h1>
        <div className="max-w-5xl mx-auto">
          <p className="text-2xl mb-12">
            72% of career advice online is outdated. It's time to ditch the
            unreliable advice rabbit hole. Koach connects you with proven
            coaches, not outdated blog posts and questionable forum threads.
            Stop spinning your wheels and start accelerating your career.
          </p>
        </div>
        <div className="pt-12">
          <button className="bg-blue-900 text-white py-6 px-20 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 text-2xl">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
