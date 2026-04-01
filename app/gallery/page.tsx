import GalleryGrid from "@/components/GalleryGrid";
import gallery from "@/data/gallery";

export default function GalleryPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
      <div className="mb-10 max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
          Gallery
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Selected stills, scenes, and visual studies.
        </h1>
        <p className="text-base leading-7 text-stone-300">
          This route uses the shared gallery data file and a reusable grid
          component with a modal preview.
        </p>
      </div>

      <GalleryGrid items={gallery} />
    </section>
  );
}
