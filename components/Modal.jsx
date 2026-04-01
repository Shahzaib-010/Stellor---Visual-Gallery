"use client";

import Image from "next/image";

export default function Modal({ item, onClose }) {
  if (!item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white transition hover:bg-black/70"
        >
          Close
        </button>
        <div className="grid md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-80">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">
              {item.category}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
