"use client";
import { Banner } from "@/components/ui/banner";
import { yazilarimiz } from "@/data/yazilarimiz";
import { slugToTitle } from "@/hooks/slug-transform";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const pathname = usePathname();
  const titlePath = pathname.split("/")[2];
  const title = slugToTitle(titlePath);

  const selectedData = yazilarimiz.find((x) => x.slug === titlePath);
  return (
    <>
      <Banner text={title} />

      <section id="content__area" className="max-contain">
        {selectedData && (
          <>
            <div
              aria-hidden="false"
              className="pb-6"
              dangerouslySetInnerHTML={{
                __html: selectedData?.value,
              }}
            />{" "}
            <Image
              src={selectedData.image}
              alt={selectedData.title}
              width={1920}
              height={400}
              className="my-6 max-h-[500px] object-cover rounded-lg shadow-xl"
            />
          </>
        )}
      </section>
    </>
  );
};

export default Page;
