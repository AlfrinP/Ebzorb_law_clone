import Header from "./Header";
import avatar from "../assets/testimonial/avatar.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Testimonials() {
  const data = [
    {
      img:avatar,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea at sed, in nulla natus voluptatum.",
      name: "AK",
    },
    {
      img:avatar,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea at sed, in nulla natus voluptatum.",
      name: "AK",
    },
    {
      img:avatar,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea at sed, in nulla natus voluptatum.",
      name: "AK",
    },
    {
      img:avatar,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea at sed, in nulla natus voluptatum.",
      name: "AK",
    },
    {
      img:avatar,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea at sed, in nulla natus voluptatum.",
      name: "AK",
    },
    {
      img:avatar,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea at sed, in nulla natus voluptatum.",
      name: "AK",
    },
    {
      img:avatar,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea at sed, in nulla natus voluptatum.",
      name: "AK",
    },

  ];
  return (
    <div className="w-full flex flex-col items-center">
      <Header name="Testimonials" />
      <div className=" w-full max-w-7xl px-[50px] p-5 text-lg font-medium">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          slidesPerView={3}
        >
          {data.map((item,index) => (
            <SwiperSlide key={index} className="p-10">
              <div className="flex flex-col items-center gap-3 p-5 w-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-3xl bg-transparent">
                <div className="w-full p-5 center">
                  <img src={item.img} className="w-28" alt="Avatar" />
                </div>
                <div className="w-full">
                  <p className="flex flex-col gap-2 text-center">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>
                      {item.para}
                    </span>
                    <span>{item.name}</span>
                  </p>
                </div>
                <div className="w-[98%]">
                  <audio controls className="block w-full">
                    <source src="horse.ogg" type="audio/ogg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
