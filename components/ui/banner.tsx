import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Banner = ({ text }: BannerProps) => {
  return (
    <div className="w-dvw h-[200px] bg-red-900 relative overflow-hidden">
      <div className="bg-white absolute left-1/2 bottom-0 clip"></div>
      <div className="bg-white absolute left-0 bottom-0 clip_sec"></div>
      <div className="max-contain h-full flex flex-col justify-center items-start">
        <h1 className="text-[40px] text-white mt-12 font-bold ">
          {text}
          <div className="w-full bg-white h-[1px] mt-6"></div>
        </h1>

        <div className="flex w-full justify-end items-center gap-2 mt-auto text-black text-xs font-semibold mb-2 z-10">
          <Link href="/" className="flex flex-row items-center gap-2">
            Ana Sayfa <IoHomeOutline />
          </Link>{" "}
          <MdKeyboardArrowRight size={18} className="translate-y-[1px]" />
          <p>Hakkımızda</p>
        </div>
      </div>
    </div>
  );
};
