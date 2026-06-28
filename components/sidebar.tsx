"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const links = [
    { label: "POSTER DESIGN", slug: "poster-design" },
    { label: "WEB DESIGN", slug: "web-design" },
    { label: "APPLICATION DESIGN", slug: "application-design" },
    { label: "MOTION DESIGN", slug: "motion-design" },
    { label: "CINEMATIC EDITING", slug: "cinematic-editing" },
    { label: "CONTENT CREATION", slug: "content-creation" },
    { label: "GAME INDUSTRY", slug: "game-industry" },
  ];

  const navigate = (slug: string) => {
    window.dispatchEvent(new Event("noise-transition:start"));

    window.dispatchEvent(
      new CustomEvent("page-transition", {
        detail: {
          href: `/${slug}`,
        },
      })
    );
  };

  return (
    <div className="col-start-8 col-span-6 row-start-1 mt-24 -ml-12 flex flex-col">
      {/* TITLE */}
      <h1
        className="mb-4 text-[118px] font-semibold leading-none
                   text-[#2292CE] tracking-[-0.05em]
                   drop-shadow-[0_0_10px_rgba(34,146,206,0.5)]
                   animate-pulse"
        style={{ fontFamily: '"Iosevka Charon Mono", monospace' }}
      >
        SATRIA ATELIER
      </h1>

      {/* MENU */}
      <nav className="flex flex-col gap-2">
        {links.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => navigate(item.slug)}
            className="group flex items-center gap-3 select-none
                       transition-all duration-200 ease-out
                       hover:translate-x-3
                       active:translate-x-1
                       active:scale-[0.98]
                       text-left"
          >
            {/* SIGNAL BOX */}
            <div
              className="h-12 w-12 rounded-[8px] bg-white
                         transition-all duration-200 ease-out
                         group-hover:scale-110
                         group-hover:bg-[#6FFF00]
                         group-hover:shadow-[0_0_12px_rgba(111,255,0,0.4)]
                         group-active:scale-90
                         group-active:brightness-75"
            />

            {/* LABEL */}
            <span className="text-[50px] font-semibold tracking-[-0.05em] text-white">
              <span
                className="inline-block transition-all duration-200 ease-out
                           group-hover:text-[#2292CE]
                           group-hover:drop-shadow-[0_0_8px_rgba(34,146,206,0.5)]
                           group-active:opacity-50
                           tv-jitter"
                style={{ fontFamily: '"Iosevka Charon Mono", monospace' }}
              >
                {item.label}
              </span>
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}