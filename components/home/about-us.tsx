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
          <strong className="font-bold">
            Sümeyye Başer Hukuk Danışmanlık ve Arabuluculuk
          </strong>
          , bireylerin ve kurumların karşılaştığı hukuki uyuşmazlıklara
          güvenilir, hızlı ve etkili çözümler sunmak amacıyla kurulmuştur.
          Ankara merkezli olarak faaliyet göstermekte olup, mesleki etik ilkeler
          doğrultusunda müvekkillerine güven veren, şeffaf ve çözüm odaklı bir
          yaklaşım benimsemektedir.
        </p>{" "}
        <br />
        <p className="font-thin text-justify text-sm">
          Temel uzmanlık alanlarımız arasında sigorta hukuku, ceza hukuku, çocuk
          ceza hukuku, iş hukuku ve kira hukuku yer almaktadır. Her dava
          dosyası, akademik bilgi ve saha tecrübesiyle değerlendirilerek
          müvekkillere özel stratejik çözümler geliştirilmektedir. Hukuki
          sürecin her aşamasında şeffaflık ve düzenli bilgilendirme temel
          prensibimizdir.
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
          src="/sumeyye_baser.webp"
          width={250}
          height={500}
          alt="Sümeyye Başer"
          className="rounded-xl shadow-xl object-cover w-full h-auto"
        />
      </div>
    </section>
  );
};
