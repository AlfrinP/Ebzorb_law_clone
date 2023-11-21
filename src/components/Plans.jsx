import Header from "../components/Header";
import crown from "../assets/plans/1.png";
import tick from "../assets/plans/tick.png";
import no from "../assets/plans/no.png";
import whatsapp from "../assets/plans/whatsapp.png";
import phone from "../assets/plans/phone.png";
import black_no from "../assets/plans/black_no.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Plans() {
  const data = [
    {
      img: crown,
      month: "8 Months",
      tag: "Newly Launched",
      features: [
        { img: tick, text: "Visual Learning QBank Concepts" },
        { img: tick, text: "Simplified Notes" },
        {
          img: tick,
          text: "EPIC Mains Test Series with Detailed Evaluation",
        },
        { img: no, text: "MEP 90 Days Tapasya" },
      ],
    },
    {
      img: crown,
      month: "8 Months",
      tag: "Newly Launched",
      features: [
        { img: tick, text: "Visual Learning QBank Concepts" },
        { img: tick, text: "Simplified Notes" },
        {
          img: tick,
          text: "EPIC Mains Test Series with Detailed Evaluation",
        },
        { img: no, text: "MEP 90 Days Tapasya" },
      ],
    },
    {
      img: crown,
      month: "8 Months",
      tag: "Newly Launched",
      features: [
        { img: tick, text: "Visual Learning QBank Concepts" },
        { img: tick, text: "Simplified Notes" },
        {
          img: tick,
          text: "EPIC Mains Test Series with Detailed Evaluation",
        },
        { img: no, text: "MEP 90 Days Tapasya" },
      ],
    },
    {
      img: crown,
      month: "8 Months",
      tag: "Newly Launched",
      features: [
        { img: tick, text: "Visual Learning QBank Concepts" },
        { img: tick, text: "Simplified Notes" },
        {
          img: tick,
          text: "EPIC Mains Test Series with Detailed Evaluation",
        },
        { img: no, text: "MEP 90 Days Tapasya" },
      ],
    },
  ];

  return (
    <div className="w-full center flex-col gap-3">
      <Header name="Get Started Today" />
      <div className=" w-full max-w-7xl px-[50px] p-5">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper p-5 pb-10" slidesPerView={3} >
          {data.map((item, index) => (
            <SwiperSlide key={index} >
              <div
                className="transform transition duration-500 hover:scale-105 center gap-3 flex-col text-lg p-10 w-[320px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer hover:text-white hover:bg-[#004166]"
              >
                <img src={item.img} alt="Plan Image" className="w-20" />
                <div>{item.month}</div>
                <div>{item.tag}</div>
                {item.features.map((feature, featureIndex) => (
                  <div
                    className="center justify-start w-full gap-5"
                    key={featureIndex}
                  >
                    <img
                      src={feature.img}
                      alt="Feature Icon"
                      className="w-[35px]"
                    />
                    <span className="w-full">{feature.text}</span>
                  </div>
                ))}
                <div className="center justify-start w-full gap-5">
                  <img src={black_no} alt="Feature Icon" className="w-[35px]" />
                  <span className="underline cursor-pointer w-full">
                    Check All Features
                  </span>
                </div>
                <div className="button font-semibold text-lg bg-slate-500 text-white center gap-2">
                  Buy Now <ArrowForwardIosIcon />
                </div>
                <div className="w-full mt-5">
                  <div className="center justify-evenly">
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      className="w-10 cursor-pointer"
                    />
                    <img src={phone} alt="phone" className="w-10 cursor-pointer" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Plans;
