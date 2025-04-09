import React from "react";
import { VisionCard } from "./vision-card";
import { hakkimizdaData } from "@/data/about_us";
import ImageText from "@/components/ui/image-text";

export const Vision = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-contain">
        <div className="flex justify-center items-center">
          <ImageText text="Biz kimiz?" />
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-stretch gap-24 mt-6 lg:px-12 mx-12">
          <VisionCard baslik="Misyonumuz" text={hakkimizdaData.misyonumuz} icon="target"/>
          <VisionCard baslik="Vizyonumuz" text={hakkimizdaData.vizyonumuz} icon="vision"/>
        </div>
      </div>
    </section>
  );
};
