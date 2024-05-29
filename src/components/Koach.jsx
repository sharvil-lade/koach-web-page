// import koach from "../assets/koach.png";
// import SlideUpImage from "./SlideUpImage";
import mentor from "../assets/mentor.png";
import mentee from "../assets/mentee.png";
import ellipseL from "../assets/ellipseL.png";
import ellipseR from "../assets/ellipseR.png";
import match95 from "../assets/match95.png";
import SlidingImageLr from "./SlidingImageLr";
import SlidingImageRl from "./SlidingImageRl";
import FadeInImage from "./FadeInImage";

function Koach() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className=" w-full md:w-1/2 h-[50vh] md:min-w-[50vw] md:h-[100vh] flex flex-col relative gap-[2rem] items-center p-[6rem] md:p-[2rem] border border-black ">
        {/* <img
          src={koach}
          alt="Placeholder"
          className="w-full h-full object-contain"
        /> */}
        {/* <SlideUpImage src={koach} /> */}
        <div className="w-[6rem] absolute top-[-20rem] my-[1rem] md:my-0 md:top-[-10rem] z-[1]">
          <FadeInImage src={match95} />
        </div>
        <div className="flex absolute gap-x-[2rem] md:gap-x-[3rem] my-[1rem] md:my-0 w-[20rem] top-[-20rem] md:top-[-9rem]">
          <FadeInImage src={ellipseL} />
          <FadeInImage src={ellipseR} />
        </div>
        <div className="flex absolute  my-[1rem] md:my-0 top-[-13rem] md:top-0">
          <SlidingImageLr src={mentor} />
          <SlidingImageRl src={mentee} className="pt-[2rem]" />
        </div>
      </div>
      <div className="bg-yellow-300 text-black p-8 w-full h-[50vh]  md:h-[100vh] flex flex-col justify-center pl-4 md:pl-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Match</h1>
        <h2 className="text-xl md:text-2xl mb-6 py-4">
          With Koach, we accelerate coach and client sourcing, swiftly pairing
          new and young pros with culturally aligned, world-class coaches
        </h2>
        <div className="py-4">
          <button className="bg-slate-900 text-white py-4 md:py-6 px-6 md:px-16 rounded-lg shadow-lg hover:bg-slate-800 transition duration-300 text-lg md:text-2xl border-2 border-black font-semibold uppercase hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[10px_10px_0px_#3498db] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Find Your Match
          </button>
        </div>
      </div>
    </div>
  );
}

export default Koach;
