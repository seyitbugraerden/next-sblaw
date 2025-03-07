import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 max-contain">
      <div className="flex-1">
        <h3 className="text-4xl font-bold mb-6">Lorem ipsum dolor sit.</h3>
        <p className="font-thin text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, enim
          dolore. Ratione, quo. Officiis obcaecati ex tenetur velit consequuntur
          nam, atque animi aperiam, consectetur magnam quia. Adipisci asperiores
          voluptate rem nesciunt temporibus est facere soluta, repudiandae amet
          vero, sint excepturi non assumenda. Quae ratione architecto voluptatem
          accusantium nihil necessitatibus at, unde ad ea illo alias aspernatur
          deserunt consectetur ab praesentium dolorum. A quisquam recusandae
          quia assumenda beatae eaque maiores eos.
        </p>
        <div className="mt-8">
          <Link
            href="#"
            className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
          >
            <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
            <span className="group-hover:translate-x-3 duration-300">
              {" "}
              Daha Fazla{" "}
            </span>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="https://picsum.photos/600/500"
          width={450}
          height={500}
          alt="Slider"
          className="shadow-xl shadow-black/30"
        />
      </div>
    </section>
  );
};
