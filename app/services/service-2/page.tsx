import Image from "next/image";

export default function page() {
  return (
    <main>
      {/* Hero */}
      <div className="relative h-52 sm:h-80 md:h-[30rem] bg-[#918ee5]">
        <Image
          className="mx-auto size-full object-contain"
          src={"/services/service-2/background.png"}
          width={1536}
          height={730}
          alt={"Background"}
        />
      </div>
      {/* End Hero */}
    </main>
  );
}
