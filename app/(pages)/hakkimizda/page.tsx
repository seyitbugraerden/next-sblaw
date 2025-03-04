import React from "react";
import { AboutUs } from "./components/about-us";
import { Banner } from "@/components/ui/banner";
import { Vision } from "./components/vision";
import { PhotoLand } from "@/components/ui/photo-land";

const page = () => {
  return (
    <>
      <Banner text="Hakkımızda" />
      <AboutUs />
      <Vision />
      <PhotoLand />
    </>
  );
};

export default page;
