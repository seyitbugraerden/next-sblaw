import Image from "next/image";
import React from "react";
import { BlogSwiperDemos } from "../ui/blog-swiper-demos";

export const BlogSwiper = () => {
  return (
    <section id="service">
      <div className="max-contain">
        <div className="flex justify-center">
          <h2 className="relative text-3xl my-6 font-semibold ps-6">
            Yazılarımız
            <Image
              src="/square.png"
              alt="bg-icon"
              width={60}
              height={60}
              className="absolute -top-[12px] left-0"
            />
          </h2>
        </div>
        <BlogSwiperDemos />
      </div>
    </section>
  );
};
