import Image from "next/image";
import React from "react";
import { VisionCard } from "./vision-card";
import { hakkimizdaData } from "@/data/about_us";

export const Vision = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-contain">
        <div className="flex flex-col justify-center items-center">
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
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-stretch gap-24 mt-6 lg:px-12 mx-12">
          <VisionCard baslik="Misyonumuz" text={hakkimizdaData.misyonumuz} />
          <VisionCard baslik="Vizyonumuz" text={hakkimizdaData.vizyonumuz} />
          <VisionCard
            baslik="Sürdürebilirlik"
            text={hakkimizdaData.surdurulebilirlik}
          />
        </div>
      </div>
    </section>
  );
};
