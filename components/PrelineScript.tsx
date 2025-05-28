"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

async function loadPreline() {
  return import("preline/dist/index.js");
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();
    };

    initPreline();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [path]);

  return null;
}
