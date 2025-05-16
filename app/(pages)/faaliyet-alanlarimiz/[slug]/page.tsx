import { Banner } from "@/components/ui/banner";
import { faaliyetData } from "@/data/faaliyet_alani";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = faaliyetData.find((x) => x.url.includes(slug));

  if (data) {
    return (
      <>
        <Banner text={data.title} />
        <section className="max-contain flex flex-col lg:flex-row gap-24">
          <div className="order-2 lg:order-1">
            <div className="sticky top-36">
              <h3 className="text-3xl font-semibold">Faaliyet Alanları</h3>
              <ul className="mt-6">
                {faaliyetData.map((x, i) => (
                  <li key={i} className="my-2">
                    <Link
                      href={x.url}
                      className="flex items-center gap-2 text-base  hover:translate-x-3 duration-300 hover:text-primary"
                    >
                      <MdArrowRightAlt />
                      {x.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="flex-1 order-1 lg:order-2"
            id="content__area"
          >
            <div
              aria-hidden="false"
              className="pb-6"
              dangerouslySetInnerHTML={{
                __html: data?.value,
              }}
            />
          </div>
        </section>
      </>
    );
  }
}
