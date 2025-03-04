"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BlogCardService } from "./blog-card-service";

export const BlogSwiperDemos = () => {
  return (
    <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper my-12">
      {Array.from({ length: 12 }).map((_, index) => (
        <SwiperSlide key={index}>
          <BlogCardService />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
