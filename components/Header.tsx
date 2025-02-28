import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="absolute top-6 left-0 z-50 w-full text-white">
      <div className="max-contain flex flex-wrap items-center justify-between p-4">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
            width={24}
            height={60}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Flowbite
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col md:flex-row  gap-8 items-center font-semibold">
            <li>
              <Link
                href="/"
                className="block py-2 px-3rounded-sm md:p-0"
                aria-current="page"
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3rounded-sm md:p-0"
                aria-current="page"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 rounded-sm  md:border-0 md:p-0 md:w-auto"
              >
                Faaliyet Alanlarımız
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
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
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow-sm w-44 "
              >
                <ul
                  className="py-2 text-sm"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm ">
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3rounded-sm md:p-0"
                aria-current="page"
              >
                Hesaplama Araçları
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 rounded-sm md:border-0 md:p-0 "
              >
                Yazılarımız
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 rounded-sm md:border-0 bg-red-500"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
