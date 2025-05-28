import Image from "next/image";

import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-4rem)] relative overflow-hidden bg-gradient-to-t from-alt-color-4 to-alt-color-5">
      <div className="absolute max-w-3xl flex flex-col justify-center items-center gap-4 text-center p-4 md:p-8 max-md:mt-10 z-20 left-0 right-0 mx-auto">
        <div>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.3] mb-4 text-main-color-1">
            دارس: رحلة معرفية تبدأ بكلمة
          </h1>

          <p className="max-w-md mx-auto font-light">
            مركز بحثي رائد متخصص في إثراء المحتوى العربي عبر خدمات التدقيق
            اللغوي، التنسيق الفني، والمراجعة العلمية. نقدم حلولًا بحثية متكاملة
            للباحثين والطلاب والمؤسسات، مع الحفاظ على أعلى معايير الجودة
            والأصالة في كل إصدار.
          </p>
        </div>

        <Button title="خدماتنا" link="/#services" />
      </div>

      <Image
        className="w-40 md:w-[18rem] lg:md:w-80 h-auto absolute left-2 lg:left-20 bottom-10 md:bottom-40 z-10"
        src={"/hero/1.png"}
        width={352}
        height={352}
        alt={"Background"}
        priority
      />
      <Image
        className="w-32 md:w-40 h-auto absolute left-0 right-0 lg:right-20 mx-auto bottom-40 md:bottom-2 z-10"
        src={"/hero/2.png"}
        width={338}
        height={338}
        alt={"Background"}
        priority
      />
      <Image
        className="w-52 md:w-[22rem] lg:md:w-[28rem] h-auto absolute right-2 lg:right-20 bottom-0 z-10"
        src={"/hero/3.png"}
        width={480}
        height={480}
        alt={"Background"}
        priority
      />
      <Image
        className="size-full max-md:scale-x-200 absolute z-0"
        src={"/hero/background.png"}
        width={1920}
        height={1080}
        alt={"Background"}
        priority
      />
    </section>
  );
};

export default Hero;
