import Image from "next/image";
import React from "react";

export const CalculatorBanner = () => {
  return (
    <section id="calculator" className="text-white">
      <div className="max-contain">
        <div className="flex justify-center">
          <h2 className="relative text-3xl my-6 font-semibold ps-6">
            Hesaplama Araçları
            <Image
              src="/square.png"
              alt="bg-icon"
              width={60}
              height={60}
              className="absolute -top-[12px] left-0"
            />
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-light text-center mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore a ratione, porro, consequatur, impedit voluptatibus expedita deserunt commodi quasi deleniti? Animi quia rem ipsum dolores tenetur quasi quibusdam temporibus.
          </p>
          <div className="flex justify-center mt-5">
            <div className="border px-3 py-1 text-xs hover:bg-white hover:text-black duration-200 cursor-pointer">İncele</div>
          </div>
        </div>
      </div>
    </section>
  );
};
