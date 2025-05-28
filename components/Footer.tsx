import Link from "next/link";
import Image from "next/image";

import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

const items = [
  { name: "خدماتنا", link: "/#services" },
  { name: "من نحن", link: "/#about-us" },
  { name: "المدونة", link: "/blog" },
  { name: "تواصل معنا", link: "/contact-us" },
];

const socialMedia = [
  { name: "Twitter", icon: FaXTwitter, link: process.env.NEXT_PUBLIC_TWITTER },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: process.env.NEXT_PUBLIC_FACEBOOK,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: process.env.NEXT_PUBLIC_INSTAGRAM,
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: process.env.NEXT_PUBLIC_WHATSAPP,
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-10 px-4 sm:px-6 lg:px-8 mt-20 bg-gradient-to-t from-alt-color-3 to-transparent">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 max-w-[85rem] mx-auto">
        <div>
          <Link className="flex-none" href="/" aria-label="Logo">
            <Image
              className="size-14"
              src={"/logo/logo.svg"}
              width={56}
              height={56}
              alt={"Logo"}
            />
          </Link>
        </div>
        {/* End Col */}

        <ul className="text-center">
          {items.map((item, i) => (
            <li
              key={i}
              className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-alt-color-1 dark:before:text-neutral-600"
            >
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-700 hover:text-alt-color-1 focus:outline-hidden focus:text-gray-700/70 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200 transition-colors duration-300"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* End Col */}

        {/* Social Brands */}
        <div className="md:text-end space-x-2">
          {socialMedia.map((item, i) => (
            <Link
              key={i}
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-700 hover:bg-alt-color-2/70 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 transition-colors duration-300"
              href={item.link || "#"}
              aria-label={item.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon className="shrink-0 size-4" />
            </Link>
          ))}
        </div>
        {/* End Social Brands */}
      </div>
      {/* End Grid */}
    </footer>
  );
};

export default Footer;
