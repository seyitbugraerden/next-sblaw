import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const AboutUs = () => {
  return (
    <section className="flex items-center justify-between gap-12 max-contain">
      <div className="flex-1">
        <h2 className="relative text-3xl my-6 font-semibold ps-6">
          Hakkımızda
          <Image
            src="/square.png"
            alt="bg-icon"
            width={60}
            height={60}
            className="absolute -top-[12px] left-0"
          />
        </h2>
        <p className="font-thin text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quo
          laborum accusamus dicta expedita. Reprehenderit nemo est nostrum
          expedita at, voluptatibus repellendus a esse rerum velit asperiores
          quia distinctio dignissimos earum quam. Incidunt officia quae dicta
          commodi cumque laudantium expedita?
        </p>
        <div className="mt-8">
          <Link href="#" className="flex flex-row gap-2 items-center text-xs">
            <MdOutlineArrowRightAlt />
            Daha Fazla
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="https://picsum.photos/600/500"
          width={600}
          height={500}
          alt="Slider"
        />
      </div>
    </section>
  );
};
