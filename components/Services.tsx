import Link from "next/link";
import Image from "next/image";

import { Button } from "@heroui/react";

import { AiOutlineFileSearch } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { PiMicroscope } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";

const services = [
  {
    title: "التدقيق اللغوي",
    description:
      "سواءٌ كنتَ طالبًا في الجامعة، باحثًا أكاديميًّا أو مؤلفًا، فإن التدقيقَ اللغوي هو خطوةٌ جوهريةٌ لإخراجِ الأبحاث، مذكراتِ التخرج، أو الأعمالِ الأدبية، في أحسنِ صورةٍ مُمكنة..",
    link: "/services/service-1",
    image: "/services/service-1/background.png",
    icon: AiOutlineFileSearch,
    color: "#fbf9f4",
  },
  {
    title: "التنسيق الفني",
    description:
      "نقدم تنسيقًا فنيًا يتناسبُ ويتماشى مع جميع المعاييرِ المتعارفِ عليها، سوف نهتم بجميعِ التفاصيل الفنية لِنضمنَ الإخراجَ السَّليمَ والمميَّزَ للأبحاث",
    link: "/services/service-2",
    image: "/services/service-2/background.png",
    icon: HiOutlineDocumentText,

    color: "#918ee5",
  },
  {
    title: "المراجعة العلمية للأبحاث",
    description:
      "سواء كنت تهدف إلى تحسين دقة عملك الأكاديمي، أو صقل مشاريعك الإبداعية والفنية، فإننا نضمن تقديم أفكارك في قالبٍ يجعلها أكثر تميّزًا، وأشد تأثيرًا!",
    link: "/services/service-3",
    image: "/services/service-3/background.png",
    icon: PiMicroscope,

    color: "#37174e",
  },
  {
    title: "الفهرسة الإلكترونية",
    description:
      "سواء كنت طالبًا في الجامعة، باحثًا أكاديميًّا أو مؤلفًا، فإن الفهرسة الإلكترونية هي أمرٌ جوهري لإخراج الأبحاث والكتب بشكل منظم، وفي أسلمِ صورةٍ ممكنة.",
    link: "/services/service-4",
    image: "/services/service-4/background.png",
    icon: VscFileSubmodule,

    color: "#fbf9f4",
  },
];

const Services = () => {
  return (
    <section id="services" className="mt-32">
      <div className="max-w-[40rem] mx-auto text-center px-8">
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-5xl md:text-8xl leading-[1.3] mb-4 text-main-color-1">
            خدماتنا
          </h2>
        </div>

        <div className="font-light text-main-color-3">
          <span>
            يقدم مركز دارس خدماته العلمية والبحثية للطلبة، الأساتذة، الباحثين،
            والمؤسسات، بداية من تطوير الخطط البحثية إلى النقد والإثراء والترجمة
            والنشر.
          </span>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Tab Nav */}
        <nav
          className="flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {services.map((service, i) => (
            <div
              key={`tabs-with-card-item-${i + 1}`}
              className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col justify-between text-start hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer ${
                i === 0 ? "active" : ""
              }`}
              id={`tabs-with-card-item-${i + 1}`}
              aria-selected={i === 0 ? true : false}
              data-hs-tab={`#tabs-with-card-${i + 1}`}
              aria-controls={`tabs-with-card-${i + 1}`}
              role="tab"
            >
              <div className="flex flex-col gap-2 sm:gap-5">
                <div className="relative w-fit">
                  {service.icon && (
                    <service.icon className="absolute top-0 bottom-0 left-0 right-0 m-auto shrink-0 block size-5 hs-tab-active:text-main-color-1 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white" />
                  )}
                  <Image
                    className="size-13"
                    src={"/title.png"}
                    width={52}
                    height={52}
                    alt={"Title"}
                  />
                </div>
                <span>
                  <span className="hs-tab-active:text-main-color-1 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    {service.title}
                  </span>
                  <span className="hidden lg:block mt-2 text-gray-800 dark:text-neutral-200 font-light text-sm">
                    {service.description}
                  </span>
                </span>
              </div>
              <Link href={service.link || "#"} className="mt-4">
                <Button className="w-full bg-main-color-2 text-main-color-3">
                  استكشف الخدمة
                </Button>
              </Link>
            </div>
          ))}
        </nav>
        {/* End Tab Nav */}

        {/* Tab Content */}
        <div className="mt-12 md:mt-16">
          {services.map((service, i) => (
            <div
              key={`tabs-with-card-${i + 1}`}
              id={`tabs-with-card-${i + 1}`}
              role="tabpanel"
              aria-labelledby={`tabs-with-card-item-${i + 1}`}
              className={i > 0 ? "hidden" : ""}
            >
              {/* Devices */}
              <div className="max-w-[1140px] lg:pb-32 relative">
                {/* Mobile Device */}
                <figure className="hidden absolute bottom-0 start-0 z-2 max-w-full w-60 h-auto mb-20 ms-20 lg:block">
                  <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] dark:bg-neutral-700">
                    <div className={`bg-[${service.color}] rounded-2xl`}>
                      {service.image && (
                        <Image
                          className="max-w-full rounded-[1.25rem] h-[29rem] object-contain object-bottom"
                          src={service.image}
                          width={1920}
                          height={1080}
                          alt="Service image"
                        />
                      )}
                    </div>
                  </div>
                </figure>
                {/* End Mobile Device */}

                {/* Browser Device */}
                <figure className="ms-auto me-20 relative z-1 max-w-full w-3xl h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
                  <div className="relative flex items-center max-w-3xl bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-neutral-800 dark:border-neutral-700">
                    <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                      <span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700"></span>
                      <span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700"></span>
                      <span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700"></span>
                    </div>
                    <div className="flex justify-center items-center size-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-neutral-700 dark:text-neutral-200">
                      www.daress.store/services/service-{i + 1}
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-b-lg">
                    {service.image && (
                      <Image
                        className="max-w-full h-auto rounded-b-lg"
                        src={service.image}
                        width={1920}
                        height={1080}
                        alt="Service Image"
                      />
                    )}
                  </div>
                </figure>
                {/* End Browser Device */}
              </div>
              {/* End Devices */}
            </div>
          ))}
        </div>
        {/* End Tab Content */}
      </div>
    </section>
  );
};

export default Services;
