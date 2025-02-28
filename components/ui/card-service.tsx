import Image from "next/image";
import React from "react";
import { GiClawHammer } from "react-icons/gi";

export const CardService = () => {
  return (
    <div className="bg-[rgba(0,0,0,.1)]">
      <Image
        src="https://picsum.photos/1920/500"
        width={1920}
        height={800}
        alt="Slider"
        className="w-full h-[200px]"
      />
      <div className="p-3 relative pt-6 pb-8">
        <div className="bg-red-500 inline-block p-2 absolute -top-3 left-2.5">
          <GiClawHammer />
        </div>
        <h3 className="text-2xl font-bold mb-2">Mimarlık</h3>
        <p className="text-sm font-thin text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ad!
        </p>
      </div>
    </div>
  );
};
