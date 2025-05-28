import Image from "next/image";

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
        />
      </div>
      {/* End Hero */}
    </main>
  );
}
