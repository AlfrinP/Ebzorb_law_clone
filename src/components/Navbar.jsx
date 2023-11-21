import React from "react";
import logo from "../assets/navbar/logo.png";
import secure from "../assets/navbar/secure.svg";
import playstore from "../assets/navbar/playstore.svg";
import apple from "../assets/navbar/apple.svg";
import mic from "../assets/navbar/mic.svg";

function Navbar() {
  return (
    <>
      <div className="w-full center bg-[#01324e] text-white">
        <div className="flex justify-between items-center px-[50px] w-full max-w-7xl">
          <div className="flex justify-center items-center gap-5 ">
            <img src={logo} alt="Logo" className="w-60 p-2" />
            <img src={secure} alt="Secure" className="w-5" />
            <ul className="flex justify-center items-center gap-4 text-lg font-medium">
              <li className="cursor-pointer">Premium+</li>
              <li className="cursor-pointer">Blogs</li>
              <li className="flex justify-center items-center gap-2 cursor-pointer">
                <img src={mic} alt="Mic" className="w-8" />
                <span>Podcast</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-4">
              <li className="cursor-pointer rounded-full hover:bg-slate-400 w-10 p-2 flex justify-between items-center">
                <img src={playstore} alt="Play Store" className="w-full" />
              </li>
              <li className="cursor-pointer rounded-full hover:bg-slate-400 w-10 p-2 flex justify-between items-center">
                <img src={apple} alt="Play Store" className="w-full " />
              </li>
              <li className="cursor-pointer">
                <button
                  type="button"
                  className="text-black bg-[#eda404] outline-white hover:outline outline-offset-0 hover:text-white font-medium rounded-xl text-lg px-7 py-3"
                >
                  Login
                </button>
              </li>
              <li className="cursor-pointer">
                <button
                  type="button"
                  className="text-black bg-white button hover:text-white"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
