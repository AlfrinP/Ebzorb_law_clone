import React from "react";
import playstore from "../assets/navbar/playbadge.png";
import applestore from "../assets/navbar/applestore.png";
import main from "../assets/navbar/main.png";


function HeroPage() {
  return (
    <div className="w-full center flex-col bg-[#003452]">
      <div className="w-full center gap-0 px-[50px] max-w-7xl">
        <div className="w-1/2 flex items-start justify-center flex-col gap-4">
          <h1 className="text-6xl text-white font-semibold">
            Turn Your Judiciary <br /> Dream Into Reality
          </h1>
          <p className="text-lg text-white font-medium">
            Revolutionize Your Prelims + Mains + Interview <br /> Preparation in
            an Integrated Manner.
          </p>
          <div className="text-2xl bg-white p-2 rounded-xl font-medium">#1 Most Downloaded Judicial Services App</div>
          <div className="flex items-start justify-center gap-3">
            <button className="w-36 h-fit">
              <img src={playstore} />
            </button>
            <button className="w-32 h-full flex items-start justify-center ">
              <img src={applestore} />
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={main} />
        </div>
      </div>
      <div className="w-full text-center flex items-center justify-center bg-black text-white p-2 text-lg">Why<a className="underline-offset-auto cursor-pointer">. Edzorb Law App</a>is ❤ by Over 10,000+ Users. ⭐⭐⭐⭐⭐
        <a className="underline-offset-auto cursor-pointer"> Read Reviews </a>
      </div>
    </div>
  );
}

export default HeroPage;
