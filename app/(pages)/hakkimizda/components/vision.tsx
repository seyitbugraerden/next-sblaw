import Image from "next/image";
import React from "react";
import { VisionCard } from "./vision-card";

export const Vision = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-contain">
        <div className="flex justify-center items-center">
          <h2 className="relative text-2xl my-6 font-semibold ps-6 uppercase">
            BİZ KİMİZ?
            <Image
              src="/square.png"
              alt="bg-icon"
              width={50}
              height={50}
              className="absolute -top-[8px] left-0"
            />
          </h2>
        </div>
        <div className="flex justify-evenly items-stretch gap-24 mt-6 lg:px-12">
          <VisionCard
            baslik="Misyonumuz"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore officiis, totam eum voluptatem expedita praesentium non quod at alias!"
          />
          <VisionCard
            baslik="Vizyonumuz"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore officiis, totam eum voluptatem expedita praesentium non quod at alias!"
          />
          <VisionCard
            baslik="Sürdürebilirlik"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore officiis, totam eum voluptatem expedita praesentium non quod at alias!"
          />
        </div>
      </div>
    </section>
  );
};
