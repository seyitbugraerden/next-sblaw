"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

export const SwiperDemos = () => {
  return (
    <Swiper className="mySwiper h-dvh">
      <SwiperSlide className="relative">
        <div className="absolute right-8 bottom-6 z-10 text-white text-2xl font-bold">
          1/3
        </div>
        <Image
          className="brightness-50 w-full h-full object-cover"
          src="https://picsum.photos/1920/800"
          width={1920}
          height={900}
          alt="Slider"
        />
      </SwiperSlide>
    </Swiper>
  );
};
