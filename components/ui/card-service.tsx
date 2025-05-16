import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInsurance } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaHome, FaMoneyCheckAlt, FaUser } from "react-icons/fa";
import { GiHandcuffed } from "react-icons/gi";
import { GrUserPolice } from "react-icons/gr";
import { IoLogoDropbox } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import {
  MdMapsHomeWork,
  MdOutlineArrowRightAlt,
  MdOutlineFamilyRestroom,
} from "react-icons/md";

interface Props {
  data: CardDataElements;
}

export const CardService = ({ data }: Props) => {
  return (
    <div className="bg-white">
      <Image
        src={data.img}
        width={1920}
        height={800}
        alt="Slider"
        className="w-full h-[200px] object-cover"
      />
      <div className="p-3 relative pt-6 pb-4 h-full">
        <div className="bg-primary inline-block p-2 absolute -top-3 left-2.5 text-white">
          {data.title === "Aile Hukuku" && <MdOutlineFamilyRestroom />}
          {data.title === "Ceza Hukuku" && <GiHandcuffed />}
          {data.title === "İş Hukuku" && <BsPersonWorkspace />}
          {data.title === "Gayrimenkul Hukuku" && <MdMapsHomeWork />}
          {data.title === "Miras Hukuku" && <FaMoneyCheckAlt />}
          {data.title === "Ticaret Hukuku" && <IoLogoDropbox />}
          {data.title === "Tüketici Hukuku" && <FaUser />}
          {data.title === "İcra ve İflas Hukuku" && <GrUserPolice />}
          {data.title === "Arabuluculuk Hizmetleri" && <IoPeopleSharp />}
          {data.title === "Kira Hukuku" && <FaHome />}
          {data.title === "Sigorta ve Tahkim Hukuku" && <AiFillInsurance />}
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-1" title={data.title}>
          {data.title}
        </h3>
        <p className="text-sm font-thin text-justify line-clamp-3 h-14">
          {data.description}
        </p>
        <div className="mt-3">
          <Link
            href={data.url}
            className="inline-flex flex-row gap-2 items-center text-xs group "
          >
            <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200 group-hover:text-primary" />
            <span className="group-hover:translate-x-3 duration-300 group-hover:text-primary">
              Daha Fazla
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
