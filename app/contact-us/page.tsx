import { Input, Textarea, Button } from "@heroui/react";

export default function page() {
  return (
    <main>
      {/* Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-xl text-main-color-3 font-bold sm:text-3xl dark:text-white">
              تواصل معنا
            </h1>
          </div>

          {/* Card */}
          <div className="mt-5 p-4 relative z-10 bg-white border border-gray-200 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
            <form className="flex flex-col gap-4">
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
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Form */}
    </main>
  );
}
