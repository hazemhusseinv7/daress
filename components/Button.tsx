"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

const Button = ({
  classNames,
  title,
  link,
}: {
  classNames?: string;
  title?: string;
  link: string;
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0 });
  const [gradientOpacity, setGradientOpacity] = useState({ left: 1, right: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    setCursorPosition({ x });

    // Calculate gradient opacity based on cursor position
    const leftOpacity = Math.max(0, Math.min(1, 1 - x / (rect.width / 2)));
    const rightOpacity = Math.max(
      0,
      Math.min(1, (x - rect.width / 2) / (rect.width / 2))
    );

    setGradientOpacity({ left: leftOpacity, right: rightOpacity });
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setCursorPosition({ x: 0 });
      setGradientOpacity({ left: 1, right: 0 });

      // Clear the timeout after it executes
      clearTimeout(timeoutId);
    }, 2000);
  };

  return (
    <Link href={link} className={`${classNames} w-full max-w-xs`}>
      <button
        className="relative rounded-full flex items-center w-full max-w-xs text-main-color-1"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left gradient */}
        <div
          style={{ opacity: gradientOpacity.left }}
          className="absolute -left-2 h-[125%] w-1/2 bg-gradient-to-r from-orange-600 to-transparent blur-sm rounded-full pointer-events-none duration-100"
        />
        <div
          style={{ opacity: gradientOpacity.left }}
          className="absolute -left-2 h-[125%] w-2/5 bg-gradient-to-r from-orange-600 to-transparent blur-sm rounded-full pointer-events-none duration-100"
        />

        {/* Right gradient */}
        <div
          style={{ opacity: gradientOpacity.right }}
          className="absolute -right-2 h-[125%] w-1/2 bg-gradient-to-r from-transparent to-orange-600 blur-sm rounded-full pointer-events-none duration-100"
        />
        <div
          style={{ opacity: gradientOpacity.right }}
          className="absolute -right-2 h-[125%] w-2/5 bg-gradient-to-r from-transparent to-orange-600 blur-sm rounded-full pointer-events-none duration-100"
        />

        <div className="relative flex justify-center items-center border border-white/60 bg-[#d1d1d1] w-full py-2 md:py-2.5 rounded-full overflow-hidden">
          <motion.div
            animate={{
              left: `${cursorPosition.x - 102}px`,
            }}
            transition={{ duration: 0.15 }}
            className="absolute flex w-[204px] h-[103px] items-center justify-center pointer-events-none"
          >
            <div className="absolute h-full w-full bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]" />
          </motion.div>
          <p className="text-lg font-semibold z-10">{title}</p>
        </div>
      </button>
    </Link>
  );
};

export default Button;
