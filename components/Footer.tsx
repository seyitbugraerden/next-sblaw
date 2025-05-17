import { calculateDb } from "@/data/calculate_db";
import { faaliyetData } from "@/data/faaliyet_alani";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white py-[60px] text-black">
        <div className="max-contain flex items-start flex-col lg:flex-row lg:justify-between gap-12">
          <div className="lg:flex-[1]">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse group"
            >
              <Image
                src="/logo.png"
                alt="Flowbite Logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col items-start">
                <span className="self-start text-xl font-semibold whitespace-nowrap group-hover:text-primary">
                  Sümeyye Başer
                </span>
                <span className="self-start text-sm font-semibold whitespace-nowrap group-hover:text-primary">
                  Hukuk Danışmanlık & Arabuluculuk
                </span>
              </div>
            </Link>
            <p className="text-justify text-xs text-black/60 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, reprehenderit.
            </p>
          </div>
          <div className="lg:flex-[2] flex flex-col lg:flex-row justify-between w-full gap-8">
            <div className="flex flex-col items-start">
              <Link
                href="/hakkimizda"
                className="font-bold mb-3 lg:mb-0 text-lg text-primary"
              >
                Hakkımızda
              </Link>
            </div>
            <div className="flex-1">
              <h6 className="font-bold mb-3 text-lg text-primary">
                Faaliyet Alanlarımız
              </h6>
              <ul className="grid grid-cols-2 gap-1">
                {faaliyetData.map((x, i) => (
                  <li key={i}>
                    <Link
                      href={x.url}
                      className="inline-flex flex-row gap-2 items-center text-xs group hover:text-primary"
                    >
                      <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                      <span
                        className="group-hover:translate-x-3 duration-300 line-clamp-1"
                        title={x.title}
                      >
                        {x.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h6 className="font-bold mb-3 text-lg text-primary">
                Hesaplama Araçları
              </h6>
              <ul className="grid grid-cols-2 gap-1">
                {calculateDb.map((x, i) => (
                  <li key={i}>
                    <Link
                      href={x.href}
                      className="inline-flex flex-row gap-2 items-center text-xs group hover:text-primary"
                    >
                      <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                      <span
                        className="group-hover:translate-x-3 duration-300 line-clamp-1"
                        title={x.title}
                      >
                        {x.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:flex-1">
            <h6 className="font-bold mb-3 text-lg text-primary">İletişim</h6>
            <ul className="flex flex-col items-start gap-3">
              <li>
                <Link
                  href="https://maps.app.goo.gl/XCF1g6QwELgfiNdGA"
                  target="_blank"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-primary"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    <strong className="text-primary">Adres : </strong> Mustafa
                    Kemal Mahallesi 2147.Sokak Turkuaz İş Merkezi No:8/8 Çankaya
                    /Ankara
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@info.com"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-primary"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    <strong className="text-primary">E-Posta : </strong>{" "}
                    info@sumeyyebaser.av.tr
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+905531408302"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-primary"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    <strong className="text-primary">Telefon : </strong> +90 553
                    140 83 02
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>{" "}
      <div className="bg-white text-black text-[10px]">
        <div className="max-contain flex flex-col gap-3 lg:flex-row lg:justify-between items-center py-4">
          <div className="flex-1">
            Copyright © 2025 Sümeyye Başer. Tüm Hakları Saklıdır.
          </div>
          <div className="flex-1 flex flex-row justify-center items-center gap-3">
            <Link
              href="#"
              className="border rounded-full p-1.5 hover:bg-primary hover-text-white duration-200 hover:text-white"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="border rounded-full p-1.5 hover:bg-primary hover-text-white duration-200 hover:text-white"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="#"
              className="border rounded-full p-1.5 hover:bg-primary hover-text-white duration-200 hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="border rounded-full p-1.5 hover:bg-primary hover-text-white duration-200"
            >
              <FaYoutube />
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <Link href="#">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </>
  );
};
