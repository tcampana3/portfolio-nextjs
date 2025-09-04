"use client";
import { useEffect } from "react";

export default function Modal({ open, src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-[85vw] max-h-[85vh] rounded"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        aria-label="Close"
        className="absolute top-4 right-5 text-white text-3xl"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  );
}
