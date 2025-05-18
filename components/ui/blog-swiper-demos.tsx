"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BlogCardService } from "./blog-card-service";
import { yazilarimiz } from "@/data/yazilarimiz";

export const BlogSwiperDemos = () => {
  return (
    <Swiper
      slidesPerView={3}
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
      }}
      className="mySwiper my-12"
    >
      {yazilarimiz.map((_, index) => (
        <SwiperSlide key={index}>
          <BlogCardService data={_} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
