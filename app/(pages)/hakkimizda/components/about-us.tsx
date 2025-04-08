import Image from "next/image";
import React from "react";

export const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 max-contain">
      <div className="flex-1">
        <h3 className="text-4xl font-bold mb-6">Lorem ipsum dolor sit.</h3>
        <p className="font-thin text-justify">
          Sümeyye Başar Hukuk & Danışmanlık olarak, bireylerin ve kurumların
          hukuki sorunlarına etkili, şeffaf ve güvenilir çözümler sunuyoruz.
          Müvekkillerimizin ihtiyaçlarını önceliklendiriyor, her adımda
          bilgilendirici ve çözüm odaklı bir yaklaşım benimsiyoruz.
        </p>{" "}
        <br />
        <p className="font-thin text-justify">
          Deneyimimiz, etik değerlerimiz ve güncel hukuk bilgimizle adaletin
          yanında duruyor; haklarınızı en iyi şekilde savunmayı ilke ediniyoruz.
        </p>
      </div>
      <div>
        <Image
          src="https://picsum.photos/600/500"
          width={450}
          height={500}
          alt="Slider"
          className="shadow-xl shadow-black/30"
        />
      </div>
    </section>
  );
};
