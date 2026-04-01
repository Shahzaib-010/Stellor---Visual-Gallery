import Link from "next/link";

const sections = [
  {
    href: "/gallery",
    title: "Gallery",
    description: "A starter media grid with modal previews.",
  },
  {
    href: "/blog",
    title: "Blog",
    description: "Sample editorial cards backed by local data.",
  },
  {
    href: "/about",
    title: "About",
    description: "A simple studio-style intro page.",
  },
];

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10">
      <div className="max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
          Stellor Starter
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          A clean content scaffold for gallery, blog, and studio pages.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
          The requested folders and starter files are in place so you can move
          straight into styling, content, and feature work.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/8"
          >
            <h2 className="text-2xl font-medium text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-stone-300">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
