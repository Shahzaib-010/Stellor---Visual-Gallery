export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Stellor is a compact starter for image-led storytelling.
        </h1>
        <div className="mt-6 space-y-4 text-base leading-7 text-stone-300">
          <p>
            This page gives you a basic place to introduce the project, studio,
            team, or creative direction.
          </p>
          <p>
            From here, you can expand the page with portraits, client work,
            timelines, testimonials, or a richer layout without changing the
            route structure.
          </p>
        </div>
      </div>
    </section>
  );
}
