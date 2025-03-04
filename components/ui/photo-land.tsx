import Link from "next/link";
import React from "react";
import { IoIosMail } from "react-icons/io";

export const PhotoLand = () => {
  return (
    <div className="bg-try h-[300px] relative flex flex-col gap-4 justify-center items-center text-white">
      <div className="absolute top-[10%] left-[2.5%] w-[95%] h-[80%] border border-white"></div>
      <h4 className="font-bold text-2xl">
        BİR UZMANA DANIŞMAK MI İSTİYORSUNUZ?
      </h4>
      <span>
        Hemen Arayın : <Link href="#">+90 555 555 55 55</Link>
      </span>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row text-sm items-center gap-2">
          <IoIosMail /> <span>info@info.com</span>
        </div>
        <div className="flex flex-row text-sm items-center gap-2">
          <IoIosMail /> <span>info@info.com</span>
        </div>
      </div>
    </div>
  );
};
