import Image from "next/image";
import React from "react";

interface Props {
  text: string;
}

const ImageText = ({ text }: Props) => {
  return (
    <div className="flex justify-center items-center lg:justify-start lg:items-start">
      <h2 className="relative text-lg my-6 font-semibold ps-6 uppercase">
        {text}
        <Image
          src="/square.png"
          alt="bg-icon"
          width={40}
          height={40}
          className="absolute -top-[6px] left-3"
        />
      </h2>
    </div>
  );
};

export default ImageText;
