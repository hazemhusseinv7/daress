import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "التدقيق اللغوي",
    description:
      "سواءٌ كنتَ طالبًا في الجامعة، باحثًا أكاديميًّا أو مؤلفًا، فإن التدقيقَ اللغوي هو خطوةٌ جوهريةٌ لإخراجِ الأبحاث، مذكراتِ التخرج، أو الأعمالِ الأدبية، في أحسنِ صورةٍ مُمكنة..",
    color: "",
  },
  {
    title: "التنسيق الفني",
    description:
      "نقدم تنسيقًا فنيًا يتناسبُ ويتماشى مع جميع المعاييرِ المتعارفِ عليها، سوف نهتم بجميعِ التفاصيل الفنية لِنضمنَ الإخراجَ السَّليمَ والمميَّزَ للأبحاث",
    color: "",
  },
  {
    title: "المراجعة العلمية للأبحاث",
    description:
      "سواء كنت تهدف إلى تحسين دقة عملك الأكاديمي، أو صقل مشاريعك الإبداعية والفنية، فإننا نضمن تقديم أفكارك في قالبٍ يجعلها أكثر تميّزًا، وأشد تأثيرًا!",
    color: "",
  },
  {
    title: "الفهرسة الإلكترونية",
    description:
      "سواء كنت طالبًا في الجامعة، باحثًا أكاديميًّا أو مؤلفًا، فإن الفهرسة الإلكترونية هي أمرٌ جوهري لإخراج الأبحاث والكتب بشكل منظم، وفي أسلمِ صورةٍ ممكنة.",
    color: "",
  },
];

const Services = () => {
  return (
    <section id="services" className="mt-32">
      <div className="max-w-[40rem] mx-auto text-center px-8">
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-5xl md:text-8xl mb-4 text-main-color-1">
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

      {/* Card */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid group/grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            // Card
            <div
              key={i}
              className="group/card flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 transition-opacity duration-300 group-hover/grid:opacity-50 hover:!opacity-100"
            >
              <div className="h-52 flex flex-col justify-center items-center transition-colors duration-300 bg-gradient-to-t from-main-color-1 via-main-color-2 to-main-color-2 group-hover/card:!from-main-color-1 group-hover/card:!via-main-color-2 group-hover/card:!to-main-color-2 group-hover/grid:from-main-color-1/80 group-hover/grid:via-main-color-1/80 group-hover/grid:to-main-color-1/80 rounded-t-xl relative">
                <span className="absolute font-light text-xs transition-colors duration-300 text-main-color-1 group-hover/grid:text-main-color-3 group-hover/card:!text-main-color-1">
                  {service.title}
                </span>
                <Image
                  className="size-44"
                  src={"/title.png"}
                  width={160}
                  height={160}
                  alt={"Title"}
                />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-main-color-1 dark:text-main-color-1">
                  خدمة {service.title}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-neutral-500 font-light text-sm">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200">
                <Link
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 transition-colors duration-300 group-hover/card:text-main-color-1 group-hover/card:animate-pulse"
                  href="#"
                >
                  استكشف الخدمة
                </Link>
              </div>
            </div>
            // End Card
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card */}
    </section>
  );
};

export default Services;
