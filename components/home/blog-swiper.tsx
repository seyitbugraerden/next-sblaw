import React from "react";
import { BlogSwiperDemos } from "../ui/blog-swiper-demos";
import ImageText from "../ui/image-text";

export const BlogSwiper = () => {
  return (
    <section id="service">
      <div className="max-contain">
        <div className="flex justify-center items-center">
          <ImageText text="Yazılarımız" />
        </div>
        <BlogSwiperDemos />
      </div>
    </section>
  );
};
