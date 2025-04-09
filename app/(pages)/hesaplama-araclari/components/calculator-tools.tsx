import { calculateDb } from "@/data/calculate_db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillAlipayCircle } from "react-icons/ai";

export const CalculatorTools = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="flex justify-center items-center">
        <h2 className="relative text-2xl my-6 font-semibold ps-6 uppercase">
          Hesaplama Araçları
          <Image
            src="/square.png"
            alt="bg-icon"
            width={50}
            height={50}
            className="absolute -top-[8px] left-0"
          />
        </h2>
      </div>
      <div className="max-contain grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6 mt-6">
        {calculateDb.map((_, index) => (
          <Link
            href={_.href}
            key={index}
            className="p-5 text-sm text-center flex justify-center items-center flex-col gap-4 shadow-2xl shadow-black/20 rounded-xl border border-primary/30 hover:bg-primary hover:text-white transition duration-300"
          >
            <AiFillAlipayCircle />
            {_.title}
          </Link>
        ))}
      </div>
    </section>
  );
};
