import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const BlogCardService = () => {
  return (
    <div className="bg-white">
      <Image
        src="https://picsum.photos/1920/500"
        width={1920}
        height={800}
        alt="Slider"
        className="w-full h-[220px] object-cover"
      />
      <div className="p-3 relative pt-6 pb-8">
        <div className="bg-red-500 inline-block px-2 py-1 absolute -top-3 left-0 text-white text-xs">
          İcra Hukuku
        </div>
        <h3 className="text-2xl font-bold mb-2">Yazı Başlığı</h3>
        <p className="text-sm font-thin text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores odit fuga esse reiciendis eveniet? Minima recusandae ex atque labore repellendus.
        </p>
        <div className="mt-3">
          <Link
            href="#"
            className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
          >
            <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
            <span className="group-hover:translate-x-3 duration-300"> Daha Fazla </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
