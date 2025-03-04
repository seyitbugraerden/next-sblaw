import Image from "next/image";
import React from "react";

export const InputSection = () => {
  return (
    <section className="max-contain flex gap-4 !pb-[120px]">
      <div className="flex-1 relative">
        <Image
          src="https://picsum.photos/600/500"
          width={450}
          height={450}
          alt="Slider"
          className="shadow-xl shadow-black/30"
        />
        <div className="absolute right-8 -bottom-12 flex flex-col w-72 text-xs bg-black/80 text-white py-[10%] px-[5%] gap-8">
          <div>
            <h5 className="text-xl font-semibold">Adres</h5>
            <p className="text-xs mt-1">
              Mustafa Kemal, 2144/1. Sk. 6, 06510 Çankaya/Ankara
            </p>
          </div>
          <div>
            <h5 className="text-xl font-semibold">Telefon</h5>
            <p className="text-xs mt-1">+90 555 555 55 55</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold">E-Posta</h5>
            <p className="text-xs mt-1">info@sumeyyebaser.av.tr</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl font-semibold">Bize Ulaşın</h4>
        <form className="flex flex-col gap-6 mt-4">
          <input
            placeholder="Ad ve Soyad"
            type="text"
            className="outline-0 border border-red-500 px-2 py-2"
            required
          />
          <input
            placeholder="E-Posta"
            type="email"
            className="outline-0 border border-red-500 px-2 py-2"
            required
          />
          <input
            placeholder="Telefon"
            type="text"
            className="outline-0 border border-red-500 px-2 py-2"
            required
          />
          <textarea
            placeholder="Mesajınız"
            rows={3}
            className="outline-0 border border-red-500 px-2 py-2"
            required
          ></textarea>
          <div>
            <button className="px-3 py-1.5 bg-red-500 text-white text-sm font-semibold cursor-pointer">
              Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
