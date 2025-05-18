"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { swiperData } from "@/data/swiper_db";

export const SwiperDemos = () => {
  return (
    <Swiper
      autoplay={{
        delay: 8000,
      }}
      speed={1000}
      modules={[Autoplay]}
      className="mySwiper h-dvh lg:h-[800px]"
    >
      {swiperData.map((_, index) => (
        <SwiperSlide key={index} className="relative">
          {swiperData.length > 1 && (
            <div className="absolute right-8 bottom-6 z-10 text-white text-2xl font-bold">
              {index + 1}/{swiperData.length}
            </div>
          )}
          <div className="absolute top-0 right-0 z-10 text-white text-2xl font-bold h-full w-1/2 bg-black/30 rounded-bl-[50%] right hidden"></div>
          <div className="absolute z-10 w-full top-1/2 -translate-y-1/2">
            <div className="max-contain flex flex-col lg:flex-row items-center justify-between">
              <div className="flex-1 text-4xl lg:text-[60px] text-center font-semibold lg:text-start  text-white relative left -top-6 flex flex-row items-center gap-4 ">
                <div className="w-[3px] h-[250px] bg-white "></div>
                <span className="lg:max-w-1/2">{_.title}</span>
              </div>
            </div>
          </div>
          <Image
            className="brightness-50 w-full h-full object-cover "
            src="/hero.webp"
            width={1920}
            height={900}
            alt="Slider"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
