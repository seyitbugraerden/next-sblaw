import { Contact } from "@/components/Contact";
import { AboutUs } from "@/components/home/about-us";
import { CalculatorBanner } from "@/components/home/calculator-banner";
import { ServiceSwiper } from "@/components/home/services-swiper";
import { SwiperDemos } from "@/components/ui/swiper-demos";

export default function Home() {
  return (
    <>
      <SwiperDemos />
      <AboutUs />
      <ServiceSwiper />
      <CalculatorBanner />
      <Contact />
    </>
  );
}
