import Link from "next/link";
import Image from "next/image";

import { Button } from "@heroui/react";

import Video from "next-video";
import service1 from "@/videos/service-1.mp4";

export default function page() {
  return (
    <main>
      {/* Hero */}
      <div className="relative h-52 sm:h-80 md:h-[30rem] bg-[#fbf9f4]">
        <Image
          className="size-full object-contain"
          src={"/services/service-1/background.png"}
          width={1920}
          height={1080}
          alt={"Background"}
          priority
        />
      </div>
      {/* End Hero */}

      <div dir="ltr">
        <Video
          src={service1}
          className="max-w-9/10 md:max-w-2/3 mx-auto mt-20"
          style={{
            "--media-primary-color": "var(--main-color-2)",
            "--media-secondary-color": "var(--main-color-3)",
            "--media-accent-color": "var(--main-color-1)",
          }}
        />
      </div>

      <Link
        className="block w-7/8 md:w-40 mx-auto mt-20"
        href={process.env.NEXT_PUBLIC_WHATSAPP || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-full bg-main-color-2 text-main-color-3">
          طلب الخدمة
        </Button>
      </Link>
    </main>
  );
}
