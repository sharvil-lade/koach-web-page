import React, { useState, useEffect } from "react";
import dashboard from "../assets/dashboard.gif";

function Dashboard() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "College Seniors",
    "Alumni",
    "Coaches & Mentors",
    "VCs",
    "Founders",
    "Startups",
    "New Professionals",
    "University Career Services",
    "Entrepreneurs",
    "Higher Education",
    "International Student Services",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="text-center md:text-3xl mt-8 mb-4">
        <h1 className="text-5xl p-4 font-bold">
          Koach is for{" "}
          <span className="text-blue-600">{roles[currentRoleIndex]}</span>
        </h1>
        <h1 className="text-2xl">
          Empowered by Experience. Leading the Future. Today.
        </h1>
      </div>
      <main className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden md:p-8">
        <img src={dashboard} alt="Main Dashboard" className="rounded-md" />
      </main>
      <div className="p-4">
        <a href="https://form.feathery.io/to/vdR7R9">
          <button className="bg-slate-900 text-white py-4 md:py-6 px-6 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-lg md:text-2xl border-2 border-black font-semibold uppercase hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[10px_10px_0px_#3498db] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Get Priority Access
          </button>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
