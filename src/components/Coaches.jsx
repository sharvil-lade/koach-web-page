import mentors from "../assets/mentors.png";
import SlidingImageRl from "./SlidingImageRl";

function Coaches() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      <div className="bg-blue-900 text-white p-8 w-full md:w-1/2 flex flex-col justify-center border border-black">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Unlock Your Potential "boss-level" experience in just a few clicks
        </h1>
        <h2 className="mb-6 text-xl md:text-2xl py-4">
          Master essential skills, get your questions answered, and build up
          your toolbox to tackle any crucial challenges at work. No complex
          trainings needed.
        </h2>
        <div className="py-4">
          <a href="https://form.feathery.io/to/vdR7R9 ">
            <button className="bg-slate-900 text-white py-3 md:py-6 px-4 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-lg md:text-2xl border-2 border-black font-semibold uppercase hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[10px_10px_0px_#3498db] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Unlock Your Potential
            </button>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-0 py-12 md:ml-24">
        <SlidingImageRl src={mentors} />
      </div>
    </div>
  );
}

export default Coaches;
