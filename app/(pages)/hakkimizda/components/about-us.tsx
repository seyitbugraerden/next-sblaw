import Image from "next/image";
import React from "react";

export const AboutUs = () => {
  return (
    <section className="max-contain">
      <div className="relative">
        <div className="lg:float-right w-full lg:w-[400px] lg:ml-12 mb-4">
          <Image
            src="/sumeyye_baser.webp"
            width={400}
            height={500}
            alt="Sümeyye Başer"
            className="rounded-xl shadow-xl object-cover w-full h-auto"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">
            Sümeyye Başer Hukuk Danışmanlık & Arabuluculuk
          </h3>

          <p className="text-md text-justify mb-4">
            <strong>Sümeyye Başer Hukuk Danışmanlık ve Arabuluculuk</strong>,
            bireylerin ve kurumların karşılaştığı hukuki uyuşmazlıklara
            güvenilir, hızlı ve etkili çözümler sunmak amacıyla kurulmuştur.
            Ankara merkezli olarak faaliyet göstermekte olup, mesleki etik
            ilkeler doğrultusunda müvekkillerine güven veren, şeffaf ve çözüm
            odaklı bir yaklaşım benimsemektedir.
          </p>

          <p className="text-md text-justify mb-4">
            Temel uzmanlık alanlarımız arasında sigorta hukuku, ceza hukuku,
            çocuk ceza hukuku, iş hukuku ve kira hukuku yer almaktadır. Her dava
            dosyası, akademik bilgi ve saha tecrübesiyle değerlendirilerek
            müvekkillere özel stratejik çözümler geliştirilmektedir. Hukuki
            sürecin her aşamasında şeffaflık ve düzenli bilgilendirme temel
            prensibimizdir.
          </p>

          <h4 className="text-lg font-bold mt-8 mb-2">
            Arabuluculuk Hizmetlerimiz
          </h4>

          <p className="text-md text-justify mb-4">
            Alternatif uyuşmazlık çözüm yollarından biri olan arabuluculuk,
            taraflar arasında dostane çözümler geliştirilmesini sağlayarak zaman
            ve maliyet açısından önemli avantajlar sunar. Aşağıdaki alanlarda
            aktif olarak arabuluculuk hizmeti sunmaktayız:
          </p>

          <ul className="list-disc pl-6 mb-4 text-md">
            <li>İş Hukuku</li>
            <li>Ticari Uyuşmazlıklar</li>
            <li>Sigorta Hukuku</li>
            <li>Tüketici Hukuku</li>
            <li>Kira Hukuku</li>
          </ul>

          <p className="text-sm text-justify mb-4">
            Arabuluculuk süreçlerinde, tarafların karşılıklı menfaatlerini
            gözeten, yapıcı ve uzlaşmacı bir yaklaşım benimsemekteyiz.
          </p>

          <h4 className="text-lg font-bold mt-8 mb-2">
            Neden Bizi Tercih Etmelisiniz?
          </h4>

          <div className="flex flex-col gap-2 text-sm mb-4">
            {[
              "Disiplinli ve şeffaf çalışma prensibi",
              "Güncel hukuki bilgi ve tecrübeye dayalı hizmet",
              "Müvekkil odaklı yaklaşım ve düzenli bilgilendirme",
              "Etik değerlere bağlılık ve güven temelli ilişkiler",
            ].map((x, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Image src="/check.webp" alt="Check" width={20} height={20} />
                <p>{x}</p>
              </div>
            ))}
          </div>

          <p className="text-md text-justify">
            Sümeyye Başer Hukuk Danışmanlık ve Arabuluculuk, Ankara’daki
            merkezinden ve çevrim içi platformlar aracılığıyla Türkiye genelinde
            bireysel ve kurumsal müvekkillerine hukuki danışmanlık, dava takibi
            ve arabuluculuk hizmetleri sunmaya devam etmektedir.
          </p>
        </div>
      </div>
    </section>
  );
};
