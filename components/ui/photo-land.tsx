import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const PhotoLand = () => {
  return (
    <div className="bg-try h-[300px] relative flex flex-col gap-4 justify-center items-center text-white">
      <div className="absolute top-[10%] left-[2.5%] w-[95%] h-[80%] border border-white"></div>
      <h4 className="font-bold text-md md:text-lg lg:text-2xl text-center">
        BİR UZMANA DANIŞMAK MI İSTİYORSUNUZ?
      </h4>
      <Link
        href="tel:+905531408302"
        className="text-xs md:text-md lg:text-lg relative z-[99999] hover:brightness-75"
      >
        Hemen Arayın : +90 553 140 83 02
      </Link>
      <div className="flex flex-col lg:flex-row items-center gap-4 relative z-[99999]">
        <Link
          href="mailto:info@info.com"
          className="flex flex-row text-sm items-center gap-2 hover:brightness-75"
        >
          <IoIosMail /> <span>info@info.com</span>
        </Link>

        <Link
          href="https://wa.me/+905531408302"
          className="flex flex-row text-sm items-center gap-2 hover:brightness-75"
        >
          <FaWhatsapp /> <span>+90 553 140 83 02</span>
        </Link>
      </div>
    </div>
  );
};
