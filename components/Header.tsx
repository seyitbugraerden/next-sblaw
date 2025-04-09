"use client";
import { faaliyetData } from "@/data/faaliyet_alani";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const bg__color =
    pathname === "/" ? "bg-white text-black" : "bg-primary text-white";

  const selected__bg = pathname === "/" ? "/logo.png" : "/logo_white.png";

  return (
    <header className="sticky top-0 z-[99999]">
      <nav className={`z-50 w-full ${bg__color}`}>
        <div className="max-contain-header flex flex-col lg:flex-row flex-nowrap items-center justify-between py-4">
          <div className="flex items-center justify-between w-full">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={selected__bg}
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
            <div className="lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
          <div
            className={`w-full lg:block lg:w-auto pt-6 lg:pt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:gap-6 text-sm items-center font-medium">
              <li>
                <Link
                  href="/"
                  className={`${
                    isHome ? "hover:text-primary" : "hover:brightness-75"
                  } block py-2 px-3rounded-sm md:p-0`}
                  aria-current="page"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className={`${
                    isHome ? "hover:text-primary" : "hover:brightness-75"
                  } block py-2 px-3rounded-sm md:p-0`}
                  aria-current="page"
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => {
                    setIsDrop(!isDrop);
                  }}
                  className={`flex items-center justify-between w-full py-2 px-3 rounded-sm  md:border-0 md:p-0 md:w-auto group cursor-pointer ${
                    isHome ? "hover:text-primary" : "hover:brightness-75"
                  }`}
                >
                  Faaliyet Alanlarımız
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 ${
                      isDrop && "rotate-180"
                    } duration-300`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDrop && (
                  <div className="z-10 font-normal divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute bg-white text-black mt-4">
                    <ul
                      className="py-2 text-sm"
                      aria-labelledby="dropdownLargeButton"
                    >
                      {faaliyetData.map((_, i) => (
                        <li key={i}>
                          <a
                            href={_.url}
                            className="block px-4 py-2 hover:bg-primary hover:text-white"
                          >
                            {_.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/hesaplama-araclari"
                  className={`${
                    isHome ? "hover:text-primary" : "hover:brightness-75"
                  } block py-2 px-3rounded-sm md:p-0`}
                  aria-current="page"
                >
                  Hesaplama Araçları
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${
                    isHome ? "hover:text-primary" : "hover:brightness-75"
                  } block py-2 px-3rounded-sm md:p-0`}
                >
                  Yazılarımız
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className={`block py-2 px-3 rounded-sm md:border-0 hover:brightness-75 ${
                    isHome ? "bg-primary text-white" : "bg-white text-primary "
                  }`}
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
