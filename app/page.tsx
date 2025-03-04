import { AboutUs } from "@/components/home/about-us";
import { BlogSwiper } from "@/components/home/blog-swiper";
import { CalculatorBanner } from "@/components/home/calculator-banner";
import { ServiceSwiper } from "@/components/home/service-swiper";
import { SwiperDemos } from "@/components/ui/swiper-demos";

export default function Home() {
  return (
    <>
      <SwiperDemos />
      <AboutUs />
      <ServiceSwiper />
      <CalculatorBanner />
      <BlogSwiper />
    </>
  );
}
