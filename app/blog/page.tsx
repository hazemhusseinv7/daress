import Link from "next/link";
import Image from "next/image";

import { GoChevronLeft } from "react-icons/go";

const blogPosts = [
  {
    title: "عنوان المقال",
    image: "/logo/logo.svg",
    link: "/blog/blog-page",
  },
  {
    title: "عنوان المقال",
    image: "/logo/logo.svg",
    link: "/blog/blog-page",
  },
  {
    title: "عنوان المقال",
    image: "/logo/logo.svg",
    link: "/blog/blog-page",
  },
];
export default function Page() {
  return (
    <main>
      {/* Hero */}
      <div className="relative min-h-[27rem] bg-gradient-to-t from-alt-color-4 to-alt-color-5">
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-linear-to-l text-transparent from-main-color-2 to-alt-color-1">
                Lorem ipsum
              </p>

              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                  المدونة
                </h1>
              </div>
              {/* End Title */}

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-neutral-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  omnis quisquam placeat itaque fugit sapiente similique
                  aliquam. Est incidunt eveniet molestiae temporibus? Rem quia
                  excepturi id facere, voluptatem maxime dolorum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid group/grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            // Card
            <Link
              key={i}
              className="group/card bg-gray-100/80 hover:bg-gray-200/80 focus:outline-hidden focus:bg-gray-200/80 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10 group-hover/grid:opacity-50 hover:!opacity-100"
              href={post.link}
            >
              <div className="w-full aspect-[16/10]">
                <Image
                  className="size-full object-cover rounded-xl"
                  width={400}
                  height={300}
                  src={post.image}
                  alt="Blog Image"
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white transition-all duration-300 group-hover/card:text-main-color-1">
                {post.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200 transition-all duration-300 group-hover/card:text-main-color-1 group-hover/card:animate-pulse">
                اقرأ المزيد
                <GoChevronLeft className="shrink-0 size-4 transition-all duration-300 ease-in-out group-hover/card:-translate-x-1 group-focus/card:-translate-x-1" />
              </span>
            </Link>
            // End Card
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </main>
  );
}
