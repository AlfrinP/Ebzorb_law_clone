import React from "react";
import logo from "../assets/navbar/logo.png";
import playstore from "../assets/navbar/playbadge.png";
import applestore from "../assets/navbar/applestore.png";
import instagram from "../assets/footer/instagram.png";
import youtube from "../assets/footer/youtube.png";
import telegram from "../assets/footer/telegram.png";
import profile from "../assets/book/profile.png";

function Footer() {
  const data = [
    {
      heading: "Popular Courses",
      items: [
        <button
          type="button"
          className="text-black bg-[#eda404] outline-white hover:outline outline-offset-0 hover:text-white font-medium rounded-xl text-lg px-7 py-2"
          key="premiumPlan"
        >
          Premium + Plan
        </button>,
        "Elite Plan",
        "FastTrack Crash Courses",
        "For Free Notes Join Telegram",
      ],
    },
    {
      heading: "Other Links",
      items: [
        "Free Resources",
        "What Makes Edzorb Law Unique",
        "Syllabus",
        "Contact Us",
      ],
    },
    {
      heading: "Join Our Free Mentorship",
      items: [
        "Sign Up Now For Free Mentorship",
        <div class="container flex justify-center items-center">
          <div class="relative">
            <div class="absolute top-4 left-3">
              <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
            <input
              type="text"
              class="h-10 w-72 pl-3 pr-20 border-black border-2 placeholder:text-sm rounded-xl z-0 focus:shadow focus:outline-none"
              placeholder="Your Email"
            />
            <div class="absolute top-0 right-0 h-full">
              <button class="w-20 h-full text-black text-sm bg-[#eda404] rounded-xl border-black border-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>,
        <div className="center justify-start gap-2 w-full" key="joinedBy">
          <div className="w-36">
            <img src={profile} alt="Profile" className="w-full" />
          </div>
          <div className="text-sm font-medium">Joined by 10,000+ Students</div>
        </div>,
      ],
    },
  ];

  return (
    <div className="w-full center bg-[#102b3b]">
      <div className=" w-full h-fit py-10 px-[50px] max-w-7xl flex items-start justify-between text-white">
      <div className="flex items-start flex-col justify-start gap-5">
        <div className="w-60 p-2 center justify-start items-start" >
          <img src={logo} alt="Logo" className="w-fit"/>
        </div>
        <div>Don't Waste Time. JOIN NOW</div>
        <div className="flex items-start justify-center gap-3">
          <button className="w-28 h-fit">
            <img src={playstore} alt="Play Store" />
          </button>
          <button className="w-24 h-full flex items-start justify-center">
            <img src={applestore} alt="Apple Store" />
          </button>
        </div>
        <div className="center gap-3">
          <button className="w-10 h-fit p-1 rounded-lg hover:bg-white">
            <img src={telegram} alt="Telegram" />
          </button>
          <button className="w-10 h-fit p-1 rounded-lg hover:bg-white">
            <img src={instagram} alt="Instagram" />
          </button>
          <button className="w-10 h-fit p-1 rounded-lg hover:bg-white">
            <img src={youtube} alt="YouTube" />
          </button>
        </div>
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <ul className="flex flex-col justify-evenly items-start gap-3">
            <li className="font-semibold text-xl">{item.heading}</li>
            <li>
              <div className="w-16 h-1 bg-slate-600"></div>
            </li>
            {item.items.map((listItem, listItemIndex) => (
              <li className="cursor-pointer" key={listItemIndex}>
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    </div>
    
  );
}

export default Footer;
