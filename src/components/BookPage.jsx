import React from "react";
import main from "../assets/book/main.jpg";
import profile from "../assets/book/profile.png";

function BookPage() {
  return (
    <div className="w-full center bg-[#2c85b9] text-white">
      <div className="w-full center gap-14 px-[50px] py-10 max-w-7xl">
        <div className="w-[380px]">
          <img src={main} className="w-full rounded-3xl" />
        </div>
        <div className="center flex-col gap-5">
          <div className="w-full">
            <p className="text-3xl font-medium leading-relaxed">
              Are You Ready to Begin Your Judiciary <br /> Journey? Sign Up Now
              for Free <br />
              Mentorship Session.
            </p>
          </div>
          <div className="mt-5 w-full">
            <button className="text-white flex justify-between items-center w-fit gap-1 font-medium rounded-xl text-xl py-2 px-4 bg-[#01324e]">
              Book Now Free Mentorship
            </button>
          </div>
          <div className="center justify-start gap-2 w-full">
            <div className="w-52">
              <img src={profile} className="w-full" />
            </div>
            <div className="text-xl font-medium">
              Joined by 10,000+ Students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
