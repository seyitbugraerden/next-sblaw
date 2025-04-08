"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const CalculatorBanner = () => {
  const router = useRouter();
  return (
    <section
      id="calculator"
      className="text-white cursor-pointer"
      onClick={() => {
        router.push("/hesaplama-araclari");
      }}
    >
      <div className="max-contain">
        <div className="flex justify-center">
          <h2 className="relative text-2xl my-6 font-semibold ps-6 uppercase">
            Hesaplama Araçları
            <Image
              src="/square.png"
              alt="bg-icon"
              width={50}
              height={50}
              className="absolute -top-[8px] left-0"
            />
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-light text-center mt-3">
            Müvekkillerimizin ihtiyaç duyduğu hukuki süreçleri daha şeffaf ve
            anlaşılır kılmak için geliştirdiğimiz hesaplama araçlarıyla,
            tazminat, faiz, kıdem-ihbar ve benzeri hesaplamaları kolayca
            yapabilirsiniz. Sümeyye Başer Danışmanlık & Hukuk Bürosu olarak, her
            adımda yanınızdayız.
          </p>
        </div>
      </div>
    </section>
  );
};
