import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ImageText from "../ui/image-text";

export const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 max-contain">
      <div className="flex-1">
        <ImageText text="Hakkımızda" />
        <h3 className="text-2xl font-bold mb-6">
          Deneyim, Şeffaflık ve Güvenin Buluştuğu Nokta
        </h3>
        <p className="font-thin text-justify text-sm">
          Uludağ Üniversitesi Hukuk Fakültesinden 2014 yılında mezun olmuş,
          ardından Çeşitli hukuk bürolarında stajyer avukatlık ve avukatlık
          yaparak hukuki birçok alanda bilgi sahibi olmuştur. 10 yılı aşkın
          süredir avukatlık mesleğini icra etmekte olup ağırlıklı olarak Sigorta
          Hukuku, İş Hukuku ve Ceza ve Çocuk Ceza Hukuku alanlarında
          çalışmaktadır.
        </p>
        <div className="mt-8">
          <Link
            href="/hakkimizda"
            className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
          >
            <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
            <span className="group-hover:translate-x-3 duration-300">
              Daha Fazla
            </span>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/about.webp"
          width={450}
          height={500}
          alt="Slider"
          className="shadow-xl shadow-black/30 rounded-xl h-[400px] object-cover"
        />
      </div>
    </section>
  );
};
