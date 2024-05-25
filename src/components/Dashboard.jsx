import React, { useState, useEffect } from "react";
import dashboard from "../assets/dashboard.png";

function Dashboard() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "College Senior",
    "New Pros",
    "Alumni",
    "Coaches & Mentors",
    "Coaching Program",
    "University Carrier Services",
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
          <span className="text-blue-600">{roles[currentRoleIndex]}</span>.
        </h1>
        <h1 className="text-2xl">
          Empowered by Experience. Leading the Future. Today.
        </h1>
      </div>
      <main className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden md:p-8">
        <img src={dashboard} alt="Main Dashboard" className="rounded-md" />
      </main>
      <div className="p-4">
        <button className="bg-blue-900 text-white py-6 px-16 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 text-2xl">
          Get Early Access
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
