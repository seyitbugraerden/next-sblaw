import React from "react";
import { FiTarget } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";

export const VisionCard = ({ baslik, text, icon }: VisionProps) => {
  return (
    <div className="bg-white flex-1 flex flex-col gap-2 text-center justify-start items-center py-10 px-12">
      {icon === "target" && <FiTarget className="size-12 text-primary"/>}
      {icon === "vision" && <IoEyeSharp className="size-12 text-primary"/>}
      <h3 className="text-2xl font-semibold text-primary">{baslik}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
};
