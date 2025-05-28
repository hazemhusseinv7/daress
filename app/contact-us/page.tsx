import { Input, Textarea, Button } from "@heroui/react";

export default function page() {
  return (
    <main>
      {/* Hero */}
      <div className="relative bg-linear-to-bl from-alt-color-4 via-transparent">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              {/* Title */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="inline-block mb-4 font-semibold text-4xl lg:text-5xl leading-[1.2] bg-clip-text bg-linear-to-l from-alt-color-2 to-alt-color-1 text-transparent">
                  تواصل معنا
                </h1>
                <p className="text-gray-600 dark:text-neutral-400">
                  نرحب في &quot;دارس&quot; بتواصلكم ويسعدنا السماع منكم بخصوص
                  أية أفكار أو مقترحات أو فرص للعمل والتعاون، يمكنكم التواصل
                  معنا عبر النموذج التالي:
                </p>
              </div>
              {/* End Title */}

              <div className="flex flex-col gap-4 text-gray-600 dark:text-neutral-400">
                {process.env.NEXT_PUBLIC_EMAIL && (
                  <div>
                    <span>أو من خلال البريد الإلكترونى:</span>{" "}
                    <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
                  </div>
                )}
                {(process.env.NEXT_PUBLIC_PHONE_1 ||
                  process.env.NEXT_PUBLIC_PHONE_2 ||
                  process.env.NEXT_PUBLIC_PHONE_3 ||
                  process.env.NEXT_PUBLIC_PHONE_4) && (
                  <div>
                    <span>أو على الأرقام التالية:</span>
                    <ul>
                      {process.env.NEXT_PUBLIC_PHONE_1 && (
                        <li dir="ltr">{process.env.NEXT_PUBLIC_PHONE_1}</li>
                      )}
                      {process.env.NEXT_PUBLIC_PHONE_2 && (
                        <li dir="ltr">{process.env.NEXT_PUBLIC_PHONE_2}</li>
                      )}
                      {process.env.NEXT_PUBLIC_PHONE_3 && (
                        <li dir="ltr">{process.env.NEXT_PUBLIC_PHONE_3}</li>
                      )}
                      {process.env.NEXT_PUBLIC_PHONE_4 && (
                        <li dir="ltr">{process.env.NEXT_PUBLIC_PHONE_4}</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* End Col */}

            <div>
              {/* Form */}
              <form className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto p-4 sm:p-7 flex flex-col gap-4 bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                <Input label="الإسم" type="text" />
                <Input label="البريد الإلكترونى" type="email" />
                <Input label="الرقم" type="tel" />
                <Textarea label="الرسالة" />

                <Button
                  className="bg-main-color-2 text-white"
                  type="submit"
                  size="lg"
                  variant="shadow"
                >
                  إرسال
                </Button>
              </form>
              {/* End Form */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Hero */}
    </main>
  );
}
