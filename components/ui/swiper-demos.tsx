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
        <div className="absolute z-10 w-full top-1/2 -translate-y-1/2">
          <div className="max-contain flex flex-row items-center justify-between">
            <div className="flex-1 text-[60px] text-white">
              Hayal Gücü ve Gerçeğin Buluştuğu Yer!{" "}
            </div>
            <div className="flex justify-end border-5 border-red-500 bg-black/30 p-3">
              <Image src="/1.webp" width={500} height={800} alt="Slider" />
            </div>
          </div>
        </div>
        <Image
          className="brightness-50 w-full h-full object-cover"
          src="https://picsum.photos/1920/800"
          width={1920}
          height={900}
          alt="Slider"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute right-8 bottom-6 z-10 text-white text-2xl font-bold">
          2/3
        </div>
        <div className="absolute z-10 w-full top-1/2 -translate-y-1/2">
          <div className="max-contain flex flex-row items-center justify-between">
            <div className="flex-1 text-[60px] text-white">
              Hayal Gücü ve Gerçeğin Buluştuğu Yer!{" "}
            </div>
            <div className="flex justify-end border-5 border-red-500 bg-black/30 p-3">
              <Image src="/1.webp" width={500} height={800} alt="Slider" />
            </div>
          </div>
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
