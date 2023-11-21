import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Header from "./Header";
import img1 from "../assets/videos/img1.jpg";
import img2 from "../assets/videos/img2.jpg";
import img3 from "../assets/videos/img3.jpg";
import img4 from "../assets/videos/img4.jpg";
import img5 from "../assets/videos/img5.jpg";
import img7 from "../assets/videos/img7.jpg";

function Latest() {
  const data = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img7 },
  ];

  return (
    <div className="w-full center flex-col py-10">
      <Header name="Latest Videos" />
      <div className=" w-full max-w-7xl px-[50px] center gap-5 overflow-auto">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper p-5 pb-10"
          slidesPerView={3}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="w-[330px]">
                <img
                  src={item.img}
                  className="rounded-3xl w-full h-full"
                  alt={`Latest Video ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Latest;
