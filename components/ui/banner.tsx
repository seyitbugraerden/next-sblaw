"use client";

import { calculateDb } from "@/data/calculate_db";
import { faaliyetData } from "@/data/faaliyet_alani";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Banner = ({ text }: BannerProps) => {
  const routerSearch = usePathname();
  const splitElement = routerSearch.split("/");

  const selectedFaaliyet = faaliyetData.find((x) =>
    x.url.includes(splitElement[2])
  );

  const selectedCalculate = calculateDb.find((x) =>
    x.href.includes(splitElement[2])
  );

  return (
    <div className="w-dvw lg:h-[200px] bg-primary relative">
      <div className="bg-white absolute left-1/2 bottom-0 clip"></div>
      <div className="bg-white absolute left-0 bottom-0 clip_sec"></div>
      <div className="max-contain h-full flex flex-col justify-center items-start pb-24">
        <h1 className="text-[40px] text-white mt-24 font-bold ">
          {text}
          <div className="w-full bg-white h-[1px] mt-6"></div>
        </h1>

        <div className="hidden lg:flex w-full justify-end items-center gap-2 mt-auto text-black text-xs font-semibold mb-2 z-10 relative top-16">
          <Link
            href="/"
            className="flex flex-row items-center gap-2 hover:text-primary duration-300"
          >
            Ana Sayfa
          </Link>
          {selectedFaaliyet && (
            <>
              <MdKeyboardArrowRight size={18} className="translate-y-[1px]" />
              <p>Faaliyet Alanlarımız </p>
            </>
          )}
          {selectedCalculate && (
            <>
              <MdKeyboardArrowRight size={18} className="translate-y-[1px]" />
              <p>Hesaplama Araçları </p>
            </>
          )}
          <MdKeyboardArrowRight size={18} className="translate-y-[1px]" />
          <p>
            {selectedFaaliyet
              ? selectedFaaliyet?.title
              : splitElement[1]
                  .replace("hakkimizda", "Hakkımızda")
                  .replace("hesaplama-araclari", "Hesaplama Araçları")
                  .replace("iletisim", "İletişim")
                  .replace("yazilarimiz", "Yazılarımız")}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
