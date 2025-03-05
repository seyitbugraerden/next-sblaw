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
      <section className="max-contain flex gap-24">
        <div className="">
          <div className="sticky top-12">
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
        <div className="flex-1 h-[200dvh]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, eos.
        </div>
      </section>
    </>
  );
}
