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
      <section className="max-contain flex flex-col lg:flex-row gap-24">
        <div className="order-2 lg:order-1">
          <div className="sticky top-36">
            <h3 className="text-3xl font-semibold">Faaliyet Alanları</h3>
            <ul className="mt-3">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 h-[200dvh] order-1 lg:order-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, eos.
        </div>
      </section>
    </>
  );
}
