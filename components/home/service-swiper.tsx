import React from "react";
import { ServiceSwiperDemo } from "../ui/service-swiper";
import ImageText from "../ui/image-text";

export const ServiceSwiper = () => {
  return (
    <section id="service">
      <div className="max-contain">
        <div className="flex justify-center items-center">
          <ImageText text="Faaliyet Alanlarımız" />
        </div>
        <ServiceSwiperDemo />
      </div>
    </section>
  );
};
