"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";

export const SwiperDemos = () => {
  return (
    <Swiper
      autoplay={{
        delay: 8000,
      }}
      modules={[Autoplay]}
      className="mySwiper h-[800px] lg:h-[800px]"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="absolute right-8 bottom-6 z-10 text-white text-2xl font-bold">
            1/3
          </div>
          <div className="absolute top-0 right-0 z-10 text-white text-2xl font-bold h-full w-1/2 bg-black/30 rounded-bl-[50%] right hidden lg:block"></div>
          <div className="absolute z-10 w-full top-1/2 -translate-y-1/2">
            <div className="max-contain flex flex-col lg:flex-row items-center justify-between">
              <div className="flex-1 text-5xl lg:text-[60px] text-center font-semibold lg:text-start  text-white relative left -top-6 ">
                Hayal Gücü ve Gerçeğin Buluştuğu Yer!
                <Image
                  src="/square.png"
                  alt="bg-icon"
                  width={280}
                  height={280}
                  className="absolute -left-12 -top-18 hidden lg:block"
                />
              </div>
              <div className="right flex-1">
                <Image src="/1.webp" width={500} height={800} alt="Slider" className="h-[500px] object-contain lg:h-fit" />
              </div>
            </div>
          </div>
          <Image
            className="brightness-50 w-full h-full object-cover "
            src="https://picsum.photos/1920/800"
            width={1920}
            height={900}
            alt="Slider"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
