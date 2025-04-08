"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { CardService } from "./card-service";
import { faaliyetData } from "@/data/faaliyet_alani";

export const ServiceSwiperDemo = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="mySwiper my-12"
    >
      {faaliyetData.map((_, index) => (
        <SwiperSlide key={index}>
          <CardService data={_}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
