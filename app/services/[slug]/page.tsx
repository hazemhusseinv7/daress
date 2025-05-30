import Link from "next/link";
import Image from "next/image";

import { Button } from "@heroui/react";

import { services } from "@/data/services";

import Video from "next-video";

export default function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = services.find(
    async (service) => service.link === `/services/${(await params).slug}`
  );

  if (!service) return null;

  return (
    <main>
      {/* Hero */}
      <div
        className="relative h-52 sm:h-80 md:h-[30rem]"
        style={{ backgroundColor: service.color }}
      >
        {service.image && (
          <Image
            className="size-full object-contain"
            src={service.image}
            width={1920}
            height={1080}
            alt="Background"
            priority
          />
        )}
      </div>
      {/* End Hero */}

      <div className="flex flex-col justify-center items-center text-center gap-4 p-4 lg:p-10">
        <h1 className="font-bold text-5xl md:text-8xl leading-[1.3] mb-4 text-main-color-1">
          {service.title}
        </h1>
        <p className="max-w-10/11 md:max-w-1/2 m-auto">{service.description}</p>
      </div>

      {service.video && (
        <div dir="ltr">
          <Video
            src={service.video}
            className="max-w-9/10 md:max-w-3/4 mx-auto mt-4 lg:p-10"
            style={{
              "--media-primary-color": "var(--main-color-2)",
              "--media-secondary-color": "var(--main-color-3)",
              "--media-accent-color": "var(--main-color-1)",
            }}
          />
        </div>
      )}
      {service.cards.length > 0 && (
        <div className="relative mt-[10vh]">
          {service.cards.map((card, i) => (
            <div
              key={i}
              className="sticky top-10 h-[100vh] flex justify-center items-center"
            >
              <div
                className="relative flex flex-col justify-between w-[40rem] h-[25rem] sm:h-[30rem] max-w-[95%] rounded-2xl bg-alt-color-3 border border-main-color-2/30 shadow-2xl shadow-alt-color-5 overflow-hidden"
                style={{
                  top: `calc(-10% + ${i * 20}px)`,
                  backgroundColor: card.color,
                }}
              >
                <span className="font-semibold text-lg md:text-xl text-main-color-1 p-4 lg:p-10">
                  {card.title}
                </span>
                {card.image && (
                  <Image
                    className="w-full h-auto"
                    src={card.image}
                    width={1920}
                    height={1080}
                    alt={card.title}
                  />
                )}

                <span className="absolute bottom-7 end-10 font-bold text-2xl md:text-7xl text-main-color-1">
                  {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link
        className="block w-7/8 md:w-80 mx-auto mt-20"
        href={process.env.NEXT_PUBLIC_WHATSAPP || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className="w-full bg-main-color-2 text-main-color-3"
          size="lg"
          variant="shadow"
        >
          اطلب الخدمة
        </Button>
      </Link>
    </main>
  );
}
