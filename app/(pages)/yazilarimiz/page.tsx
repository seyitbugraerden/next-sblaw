import { Banner } from "@/components/ui/banner";
import { BlogCardService } from "@/components/ui/blog-card-service";
import React from "react";

const Page = () => {
  return (
    <>
      <Banner text="Yazılarımız" />
      <section className="max-contain grid grid-cols-1 lg:grid-cols-3 gap-12">
        {Array.from({ length: 12 }).map((_, index) => (
          <BlogCardService key={index} />
        ))}
      </section>
    </>
  );
};

export default Page;
