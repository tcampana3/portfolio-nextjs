"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { withBasePath } from "@/components/withBasePath";

export default function CarouselModal({ open, images, startIndex = 0, title, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const touchStartX = useRef(null);

  // Keep idx in sync when modal opens
  useEffect(() => {
    if (open) setIdx(startIndex);
  }, [open, startIndex]);

  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  // Keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, next, prev]);

  if (!open || !images?.length) return null;

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    if (dx < -40) next();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative max-w-[92vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        {/* Image: use a relative wrapper so <Image fill> can size correctly */}
        <div className="relative w-[min(92vw,900px)] aspect-[16/10] mx-auto">
          <Image
            src={withBasePath(images[idx])}                          // e.g. "/images/Sorting.gif"
            alt={`${title} image ${idx + 1}`}
            fill                                       // fills the wrapper
            className="object-contain rounded-lg bg-white"
            sizes="(max-width: 1024px) 100vw, 900px"
            unoptimized                                 // required for GitHub Pages
            priority                                    // helps first paint in modal
          />
        </div>

        {/* Controls */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-1 rounded-md bg-black/40 hover:bg-black/60"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-1 rounded-md bg-black/40 hover:bg-black/60"
        >
          ›
        </button>

        {/* Close */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl bg-black/40 hover:bg-black/60 rounded-md px-3 py-1"
        >
          ×
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 w-2 rounded-full cursor-pointer ${i === idx ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
