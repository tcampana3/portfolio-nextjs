// top of ProjectCard.js
"use client";
import { useState } from "react";
import CarouselModal from "@/components/CarouselModal";   // ← new modal
import Image from "next/image";

export default function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openCarousel = (i) => { setStartIndex(i); setOpen(true); };

  return (
    <article
      className="rounded-2xl p-5 border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <h3 className="text-lg font-medium">{p.title}</h3>
      <p className="text-sm mt-3">{p.summary}</p>

      {!!p.stack?.length && (
        <ul className="flex flex-wrap gap-2 text-[11px] mt-4">
          {p.stack.map((s) => (
            <li
              key={s}
              className="px-2 py-1 rounded-full border"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      {!!p.images?.length && (
        <div
          className={`mt-5 grid gap-6 justify-items-center ${
            p.images.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
          } grid-cols-1`}
        >
          {p.images.map((src, i) => (
            <button
              key={src}
              onClick={() => openCarousel(i)}
              className="rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition w-full max-w-[520px]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="aspect-[16/10] bg-white">
                <Image
                  src={src} // e.g. "/images/Sorting.gif"
                  alt={`${p.title} screenshot ${i + 1}`}
                  fill // fills the parent box
                  sizes="(max-width: 640px) 100vw, 520px" // responsive hint
                  className="object-contain"
                  priority={i === 0} // first image loads first
                  unoptimized // safe for GitHub Pages
                />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* New slideshow modal */}
      <CarouselModal
        open={open}
        images={p.images || []}
        startIndex={startIndex}
        title={p.title}
        onClose={() => setOpen(false)}
      />
    </article>
  );
}
