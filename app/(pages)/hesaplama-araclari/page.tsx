import { Banner } from "@/components/ui/banner";
import React from "react";
import { AboutUs } from "./components/about-us";
import { PhotoLand } from "@/components/ui/photo-land";
import { CalculatorTools } from "./components/calculator-tools";

const page = () => {
  return (
    <>
      <Banner text="Hesaplama Araçları" />
      <AboutUs />
      <CalculatorTools />
      <PhotoLand />
    </>
  );
};

export default page;
