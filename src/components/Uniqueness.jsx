import React from "react";
import Header from "./Header";
import hand from "../assets/unique/hand.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Uniqueness() {
  const data = [
    {
      img: hand,
      title: "Illustration Hand",
      para1: "Illustration Hand",
      para2: "Illustration Hand",
    },
    {
      img: hand,
      title: "Illustration Hand",
      para1: "Illustration Hand",
      para2: "Illustration Hand",
    },
    {
      img: hand,
      title: "Illustration Hand",
      para1: "Illustration Hand",
      para2: "Illustration Hand",
    },
    {
      img: hand,
      title: "Illustration Hand",
      para1: "Illustration Hand",
      para2: "Illustration Hand",
    },
    {
      img: hand,
      title: "Illustration Hand",
      para1: "Illustration Hand",
      para2: "Illustration Hand",
    },
    {
      img: hand,
      title: "Illustration Hand",
      para1: "Illustration Hand",
      para2: "Illustration Hand",
    },
    {
      img: hand,
      title: "Illustration Hand",
      para1: "Illustration Hand",
      para2: "Illustration Hand",
    },
  ];
  return (
    <div className="w-full center flex-col px-[50px] py-10">
      <Header name="What makes Edzorb Law unique" />
      <div className=" w-full max-w-7xl px-[50px] center justify-evenly">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper p-5 pb-10"
          slidesPerView={4}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="center flex-col gap-3 p-5 shadow-lg w-fit rounded-3xl">
                <div className="w-fit bg-red-300 rounded-full">
                  <img src={item.img} className="w-32" />
                </div>
                <div className="text-xl font-medium">{item.title}</div>
                <div className="mt-5 center flex-col">
                  <span>{item.para1}</span>
                  <span>I{item.para2}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Uniqueness;
