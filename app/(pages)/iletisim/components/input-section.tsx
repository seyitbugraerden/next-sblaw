import Image from "next/image";
import Link from "next/link";
import React from "react";

export const InputSection = () => {
  return (
    <section className="max-contain flex flex-col lg:flex-row gap-4 !pb-[120px]">
      <div className="flex-1 relative">
        <Image
          src="/contact.webp"
          width={450}
          height={450}
          alt="Slider"
          className="shadow-xl shadow-black/30 hidden lg:block h-[350px] rounded-xl object-cover"
        />
        <div className="lg:absolute right-8 -bottom-12 flex flex-col w-full lg:w-72 text-xs bg-black/80 text-white py-[10%] px-[5%] gap-8">
          <div>
            <h5 className="text-xl font-semibold">Adres</h5>
            <p className="text-xs mt-1">
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/XCF1g6QwELgfiNdGA"
                className="hover:text-primary duration-300"
              >
                Mustafa Kemal Mahallesi 2147.Sokak Turkuaz İş Merkezi No:8/8 Çankaya /Ankara
              </Link>
            </p>
          </div>
          <div>
            <h5 className="text-xl font-semibold">Telefon</h5>
            <Link
              href="tel:+905531408302"
              className="text-xs mt-1 hover:text-primary duration-300"
            >
              +90 553 140 83 02
            </Link>
          </div>
          <div>
            <h5 className="text-xl font-semibold">E-Posta</h5>
            <Link
              href="mailto:info@info.com"
              className="text-xs mt-1 hover:text-primary duration-300"
            >
              info@sumeyyebaser.av.tr
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl font-semibold">Bize Ulaşın</h4>
        <form className="flex flex-col gap-6 mt-4">
          <input
            placeholder="Ad ve Soyad"
            type="text"
            className="outline-0 border border-primary px-2 py-2 rounded-lg"
            required
          />
          <input
            placeholder="E-Posta"
            type="email"
            className="outline-0 border border-primary px-2 py-2 rounded-lg"
            required
          />
          <input
            placeholder="Telefon"
            type="text"
            className="outline-0 border border-primary px-2 py-2 rounded-lg"
            required
          />
          <textarea
            placeholder="Mesajınız"
            rows={3}
            className="outline-0 border border-primary px-2 py-2 rounded-lg"
            required
          ></textarea>
          <div>
            <button className="px-3 py-1.5 border border-white bg-primary text-white text-sm font-semibold cursor-pointer rounded-lg hover:bg-white hover:text-primary duration-300 hover:border-primary">
              Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
