import React from "react";

export const VisionCard = ({ baslik, text }: VisionProps) => {
  return (
    <div className="bg-white flex-1 flex flex-col gap-2 text-center justify-start items-center py-10 px-12">
      <h3 className="text-2xl font-semibold text-red-500">{baslik}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
};
