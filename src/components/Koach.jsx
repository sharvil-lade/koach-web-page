import koach from "../assets/koach.png";

function Koach() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 border border-black">
        <img
          src={koach}
          alt="Placeholder"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="bg-yellow-300 text-black p-8 w-full md:w-1/2 flex flex-col justify-center pl-4 md:pl-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Strategic Talent Development Platform
        </h1>
        <h2 className="text-xl md:text-3xl mb-6 py-4">
          With Koach, we accelerate coach and client sourcing, swiftly pairing
          new and young pros with culturally aligned, world-class coaches
        </h2>
        <div className="py-4">
          <button className="bg-slate-900 text-white py-4 md:py-6 px-8 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-xl md:text-2xl">
            Accelerate Career
          </button>
        </div>
      </div>
    </div>
  );
}

export default Koach;
