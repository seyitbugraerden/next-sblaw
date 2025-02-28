import React from "react";
import { ServiceSwiperDemo } from "../ui/service-swiper";
import Image from "next/image";

export const ServiceSwiper = () => {
  return (
    <section className="max-contain bg-[#FAFAFA]">
      <div className="flex justify-center">
        <h2 className="relative text-3xl my-6 font-bold">
          Faaliyet Alanlarımız
          <Image
            src="/square.png"
            alt="bg-icon"
            width={30}
            height={30}
            className="absolute top-[5px] -left-2 scale-150"
          />
        </h2>
      </div>
      <ServiceSwiperDemo />
    </section>
  );
};
