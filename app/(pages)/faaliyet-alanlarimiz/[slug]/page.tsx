import { Banner } from "@/components/ui/banner";
import { transformData } from "@/hooks/use-transform";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lastData = await transformData(slug);

  return (
    <>
      <Banner text={lastData} />
    </>
  );
}
