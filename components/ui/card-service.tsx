import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiClawHammer } from "react-icons/gi";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const CardService = () => {
  return (
    <div className="bg-white">
      <Image
        src="https://picsum.photos/1920/500"
        width={1920}
        height={800}
        alt="Slider"
        className="w-full h-[200px] object-cover"
      />
      <div className="p-3 relative pt-6 pb-8">
        <div className="bg-red-500 inline-block p-2 absolute -top-3 left-2.5 text-white">
          <GiClawHammer />
        </div>
        <h3 className="text-2xl font-bold mb-2">Mimarlık</h3>
        <p className="text-sm font-thin text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          totam. Maiores est obcaecati, amet eum itaque voluptatem fuga autem
          quae nulla doloribus, earum iusto dolorum!
        </p>
        <div className="mt-3">
          <Link
            href="#"
            className="flex flex-row gap-2 items-center text-xs group"
          >
            <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
            <span className="group-hover:translate-x-3 duration-300"> Daha Fazla </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
