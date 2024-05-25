import match from "../assets/match.png";

function KoachMatch() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 border border-black">
        <img
          src={match}
          alt="Placeholder"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="bg-yellow-300 text-black p-8 w-full md:w-1/2 flex flex-col justify-center md:pl-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Eliminate wasted time and the endless (practically fruitless), generic
          searches
        </h1>
        <h2 className="mb-4 text-xl md:text-2xl mt-4">
          A McKinsey report states that employees spend 1.8 hours every day—9.3
          hours per week, on an average—searching and gathering information
          needed to do their job and navigate their career. Costing you time,
          money, and effort.
        </h2>
        <h2 className="mb-6 text-xl md:text-2xl">
          Empower your team with personalized insights and solutions to their
          professional challenges with Koach.
        </h2>
        <div className="py-4">
          <button className="bg-slate-900 text-white py-4 md:py-6 px-8 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-lg md:text-2xl">
            Accelerate Career
          </button>
        </div>
      </div>
    </div>
  );
}

export default KoachMatch;
