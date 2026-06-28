"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TransitionManager() {
  const router = useRouter();

  useEffect(() => {
    const handler = (e: Event) => {
      const { href } = (e as CustomEvent<{ href: string }>).detail;

      // Give Framer Motion time to play exit animation.
      setTimeout(() => {
        router.push(href);
      }, 400);
    };

    window.addEventListener("page-transition", handler);

    return () => {
      window.removeEventListener("page-transition", handler);
    };
  }, [router]);

  return null;
}