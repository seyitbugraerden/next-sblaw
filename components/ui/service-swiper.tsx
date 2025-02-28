"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { CardService } from "./card-service";

export const ServiceSwiperDemo = () => {
  return (
    <Swiper slidesPerView={4} spaceBetween={30} className="mySwiper my-12">
      {Array.from({ length: 12 }).map((_, index) => (
        <SwiperSlide key={index}>
          <CardService />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
