import { Banner } from "@/components/ui/banner";
import { calculateDb } from "@/data/calculate_db";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = calculateDb.find((x) => x.href.includes(slug));

  if (!data) {
    return null;
  }

  return (
    <>
      <Banner text={data?.title} />
    </>
  );
};

export default page;
