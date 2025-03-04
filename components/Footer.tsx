import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black/90 py-[60px] text-white">
        <div className="max-contain flex items-start flex-col lg:flex-row lg:justify-between gap-12">
          <div className="flex-1">
            <Link
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse "
            >
              <Image
                src="/logo_white.png"
                alt="Flowbite Logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col items-start">
                <span className="self-start text-2xl font-semibold whitespace-nowrap ">
                  Sümeyye Başer
                </span>
                <span className="self-start text-sm font-semibold whitespace-nowrap ">
                  Hukuk Danışmanlık & Arabuluculuk
                </span>
              </div>
            </Link>
            <p className="text-justify text-xs text-white/60 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, reprehenderit.
            </p>
          </div>
          <div className="flex-1">
            <h6 className="font-bold mb-3 text-2xl">Başlık</h6>
            <ul>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    Alt Başlık
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    Alt Başlık
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    Alt Başlık
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    Alt Başlık
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h6 className="font-bold mb-3 text-2xl">Başlık</h6>
            <ul>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    Alt Başlık
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    Alt Başlık
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    Alt Başlık
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    Alt Başlık
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h6 className="font-bold mb-3 text-2xl">İletişim</h6>
            <ul className="flex flex-col items-start gap-3">
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    <strong>Adres : </strong> Mustafa Kemal, 2144/1. Sk. 6,
                    06510 Çankaya/Ankara
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    <strong>E-Posta : </strong> info@sumeyyebaser.av.tr
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex flex-row gap-2 items-center text-xs group hover:text-red-500"
                >
                  <MdOutlineArrowRightAlt className="group-hover:translate-x-3 duration-200" />
                  <span className="group-hover:translate-x-3 duration-300">
                    <strong>Telefon : </strong> +90 555 555 55 55
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>{" "}
      <div className="bg-black text-white text-[10px]">
        <div className="max-contain flex flex-col gap-3 lg:flex-row lg:justify-between items-center py-4">
          <div className="flex-1">
            Copyright © 2025 Sümeyye Başer. Tüm Hakları Saklıdır.
          </div>
          <div className="flex-1 flex flex-row justify-center items-center gap-3">
            <Link
              href="#"
              className="border rounded-full p-1.5 hover:bg-red-500 hover-text-white duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="border rounded-full p-1.5 hover:bg-red-500 hover-text-white duration-200"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="#"
              className="border rounded-full p-1.5 hover:bg-red-500 hover-text-white duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="border rounded-full p-1.5 hover:bg-red-500 hover-text-white duration-200"
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
