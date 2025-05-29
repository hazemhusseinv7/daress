import Image from "next/image";

import Video from "next-video";
import service3 from "@/videos/service-3.mp4";

export default function page() {
  return (
    <main>
      {/* Hero */}
      <div className="relative h-52 sm:h-80 md:h-[30rem] bg-[#37174e]">
        <Image
          className="mx-auto size-full object-contain"
          src={"/services/service-3/background.png"}
          width={1536}
          height={730}
          alt={"Background"}
          priority
        />
      </div>
      {/* End Hero */}

            <div dir="ltr">
        <Video
          src={service3}
          className="max-w-9/10 md:max-w-2/3 mx-auto mt-20"
          style={{
            "--media-primary-color": "var(--main-color-2)",
            "--media-secondary-color": "var(--main-color-3)",
            "--media-accent-color": "var(--main-color-1)",
          }}
        />
      </div>
    </main>
  );
}
