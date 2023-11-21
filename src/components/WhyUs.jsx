import React from "react";
import thumb1 from "../assets/why_us/1.png";
import thumb2 from "../assets/why_us/2.png";
import thumb3 from "../assets/why_us/3.png";
import thumb4 from "../assets/why_us/4.png";

function WhyUs() {
  return (
    <div className="w-full center bg-[#003a5b] text-white">
      <div className=" w-full center flex-col  px-[50px] max-w-7xl">
        <div className="w-full text-5xl font-bold text-center p-3">
          Why Edzorb Law?
        </div>
        <div className="w-full center p-5">
          <div className="w-1/2 h-full center flex-col justify-evenly gap-2">
            <ul className="center flex-col gap-5">
              <li>
                <p className="text-xl leading-relaxed">
                  Edzorb's mission: Equal access to top-notch study materials
                  for aspiring judicial exam candidates, achieving top 10 ranks
                  through our guidance and your dedication.
                </p>
              </li>
              <li>
                <p className="text-xl leading-relaxed">
                  We want to make sure that every aspirant gets access to the
                  best study material there is.
                </p>
              </li>
              <li>
                <ul className="list-disc text-xl">
                  <li>
                    Give learners access to the highest quality digital learning
                    materials and resources.
                  </li>
                  <li>
                    Edzorb Law's Guidance + Your Dedication = A rank in Top 10!
                  </li>
                </ul>
              </li>
              <li></li>
            </ul>
            <div className="center w-full h-full">
              <div className="flex justify-evenly items-center flex-col w-1/2 gap-5">
                <div className="center flex-col gap-3">
                  <img src={thumb1} />
                  <span className="font-bold text-xl">1,000+</span>
                  <span className="font-bold text-xl">Ranks</span>
                </div>
                <div className="center flex-col gap-1">
                  <img src={thumb2} />
                  <span className="font-bold text-xl">10,000+</span>
                  <span className="font-bold text-xl">Students</span>
                </div>
              </div>
              <div className="flex justify-evenly items-center flex-col w-1/2 gap-5">
                <div className="center flex-col gap-1">
                  <img src={thumb3} />
                  <span className="font-bold text-xl">100,000+</span>
                  <span className="font-bold text-xl">Monthly Users</span>
                </div>
                <div className="center flex-col gap-1">
                  <img src={thumb4} />
                  <span className="font-bold text-xl">7+</span>
                  <span className="font-bold text-xl">Courses</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
