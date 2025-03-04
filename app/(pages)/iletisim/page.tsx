import { Banner } from "@/components/ui/banner";
import React from "react";
import { Map } from "./components/map";
import { InputSection } from "./components/input-section";

const page = () => {
  return (
    <>
      <Banner text="İletişim" />
      <InputSection />
      <Map />
    </>
  );
};

export default page;
