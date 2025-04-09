"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ImageText from "../ui/image-text";

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
      <div className="max-contain pb-6">
        <div className="flex justify-center items-center">
          <ImageText text="Hesaplama Araçları" />
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
