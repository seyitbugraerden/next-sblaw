import { Banner } from "@/components/ui/banner";
import { BlogCardService } from "@/components/ui/blog-card-service";
import { yazilarimiz } from "@/data/yazilarimiz";
import React from "react";

const Page = () => {
  return (
    <>
      <Banner text="Yazılarımız" />
      <section className="max-contain grid grid-cols-1 lg:grid-cols-3 gap-12">
        {yazilarimiz.map((_, index) => (
          <BlogCardService key={index} data={_} />
        ))}
      </section>
    </>
  );
};

export default Page;
